import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

function Home() {
  const loggedIn = {
    firstName: "Robin",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and managed your account and transactions efficiently."
            user={loggedIn.firstName || "Guest"}
          />
          <TotalBalanceBox 
          accounts={[]} 
          totalBanks={1}
          totalCurrentBalance={6350}          
          />
        </header>
      </div>
    </section>
  );
}

export default Home;
