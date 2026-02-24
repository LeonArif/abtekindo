import { NextResponse } from "next/server";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../../firebase";

export async function GET() {
	try {
		const db = getFirestore(app);
		const querySnapshot = await getDocs(collection(db, "barang"));
		const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
		return NextResponse.json({ success: true, data });
	} catch (error: any) {
		return NextResponse.json({ success: false, error: error.message }, { status: 500 });
	}
}
