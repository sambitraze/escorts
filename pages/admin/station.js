import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

// components

// layout for page

import Admin from "../../layouts/Admin.js";
import StationTable from "../../components/Cards/StationTable.js";

export default function Tables() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <StationTable />
        </div>
      </div>
    </div>
  );
}

Tables.layout = Admin;
