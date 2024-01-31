/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const ProfilePage = ({ tenantName }: { tenantName: string }) => {
  const domains = {
    ostadhy: {
      subdomainName: "ostadhy",
      desc: "Ostadhy is learninn platform",
    },
    takiacademy: {
      subdomainName: "ostadhy",
      desc: "Takiacademy is learninn platform",
    },
  };

  const [profile, setProfile] = useState<{
    subdomainName: string;
    desc: string;
  }>();
  useEffect(() => {
    setProfile(domains[tenantName as keyof typeof domains]);
  }, [tenantName]);

  if (!profile) {
    return <div>Profile Not Found, or not valid subdomain</div>;
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <div>subdomain is : {profile.subdomainName}</div>
      <div>desc: {profile.desc}</div>
    </div>
  );
};

export default ProfilePage;
