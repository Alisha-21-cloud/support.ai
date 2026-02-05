import connectDb from "@/lib/db";
import Settings from "@/model/settings.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const {
            ownerId,
            businessName,
            supportEmail,
            knowledge
        } = await req.json();

        if (!ownerId) {
            return NextResponse.json(
                { error: "Owner ID is required" },
                { status: 400 }
            );
        }

        await connectDb();

        const updateData: any = {
            businessName,
            supportEmail,
        };

        if (typeof knowledge === "string" && knowledge.trim() !== "") {
            updateData.knowledge = knowledge;
        }

        const settings = await Settings.findOneAndUpdate(
            { ownerId },
            { $set: updateData },
            { new: true, upsert: true }
        );

        return NextResponse.json({ settings }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 }
        );
    }
}
