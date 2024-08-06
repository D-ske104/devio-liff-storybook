import { liff } from "@line/liff";
import { useEffect, useState } from "react";

export const UserProfile = () => {
  const [profile, setProfile] = useState<null | Awaited<
    ReturnType<typeof liff.getProfile>
  >>(null);

  useEffect(() => {
    liff.getProfile().then((profile) => setProfile(profile));
  });

  return (
    <div className="bg-white shadow-md p-4 rounded-sm aspect-[4/3] w-72">
      <div className="flex flex-col items-center gap-2">
        <section className="flex flex-col items-center p-2">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            {profile ? (
              <img
                src={profile.pictureUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full bg-gray-300 animate-pulse"
                role="progressbar"
              />
            )}
          </div>
        </section>
        <section className="flex flex-col items-center">
          <div>
            {profile ? (
              <div className="text-xl font-bold">{profile.displayName}</div>
            ) : (
              <div className="bg-gray-300 animate-pulse h-7 w-32"></div>
            )}
          </div>
        </section>
        <section className="flex flex-col items-center">
          <div>
            {profile ? (
              <div className="text-base text-gray-500">
                {profile.statusMessage}
              </div>
            ) : (
              <div className="bg-gray-300 animate-pulse h-6 w-48"></div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
