import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { getUserById } from "@/data/user";

const Settings = async () => {
  const session = await auth();

  const userData = await getUserById(session?.user.id as string);

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button variant="outline">Signout</Button>
      </form>
      <div>
        {userData && (
          <div>
            <h1>{userData.name}</h1>
            <h1>{userData.email}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
