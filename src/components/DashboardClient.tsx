'use client'

import axios from 'axios'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function DashboardClient({ ownerId }: { ownerId: string }) {

    const navigate = useRouter()
    const [businessName, setBusinessName] = useState('')
    const [supportEmail, setSupportEmail] = useState('')
    const [knowledge, setKnowledge] = useState('')
    const [loading, setLoading] = useState(false)
    const [saved, setSaved] = useState(false)

    const handleSettings = async () => {
        try {
            setLoading(true)
            const result = await axios.post("/api/settings", {
                ownerId,
                businessName,
                supportEmail,
                knowledge
            })
            console.log(result.data)
            setLoading(false)
            setSaved(true)
            setTimeout(() => setSaved(false), 3000)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!ownerId) return

        const handleGetDetails = async () => {
            try {
                const result = await axios.post("/api/settings/get", { ownerId })

                const setting = result.data.setting

                if (setting) {
                    setBusinessName(setting.businessName ?? '')
                    setSupportEmail(setting.supportEmail ?? '')
                    setKnowledge(setting.knowledge ?? '')
                }


            } catch (error) {
                console.log(error)
            }
        }

        handleGetDetails()
    }, [ownerId])


    return (
        <div className='min-h-screen bg-zinc-50 text-zinc-900'>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200"
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="text-lg font-semibold tracking-tight cursor-pointer"
                        onClick={() => navigate.push("/")}
                    >
                        Support<span className="text-zinc-900">AI</span>
                    </div>
                    <button
                        className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition'
                    >
                        Embed Chatbot
                    </button>
                </div>
            </motion.div>

            <div className='flex justify-center px-4 py-14 mt-20'>
                <motion.div
                    className='w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10'
                >
                    <div className='mb-10'>
                        <h1 className='text-2xl font-semibold'>ChatBot Settings</h1>
                        <p className='text-zinc-500 mt-1'>Manage your chatbot settings and preferences here.</p>
                    </div>

                    <div className='mb-10'>
                        <h1 className='text-lg font-medium mb-4'>Business Details</h1>
                        <div className='space-y-4'>
                            <input
                                type="text"
                                placeholder='Business Name'
                                className='w-full rounded-xl border border-zinc-300 px-4  py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
                                onChange={(e) => setBusinessName(e.target.value)}
                                value={businessName}
                            />
                            <input
                                type="text"
                                placeholder='Support Email'
                                className='w-full rounded-xl border border-zinc-300 px-4  py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
                                onChange={(e) => setSupportEmail(e.target.value)}
                                value={supportEmail}
                            />
                        </div>
                    </div>

                    <div className='mb-10'>
                        <h1 className='text-lg font-medium mb-4'>Knowledge Base</h1>
                        <p className='text-sm text-zinc-500 mb-4'>Add FAQs, Policies, Delivery Information, and other relevant details to help your customers.</p>
                        <div className='space-y-4'>
                            <textarea
                                placeholder={
                                    `Example:
• Return Policy: You can return any item within 30 days of purchase with a receipt.
• Shipping Information: We offer free shipping on orders over $50.
• Contact Us: For any inquiries, please email support@example.com.
• Operating Hours: Monday to Friday, 9 AM to 5 PM.`
                                }
                                rows={6}
                                className="w-full h-54 rounded-xl border border-zinc-300 px-4 py-3 text-sm
             placeholder:text-zinc-400
             focus:outline-none focus:ring-2 focus:ring-black/80"
                                onChange={(e) => setKnowledge(e.target.value)}
                                value={knowledge}
                            />

                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className='px-7 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60'
                            onClick={handleSettings}
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </motion.button>
                        {saved && (
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className='text-emerald-600 text-sm font-medium'
                            >
                                ✔ Your settings have been saved successfully!
                            </motion.span>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default DashboardClient