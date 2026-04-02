import Image from "next/image";

// ── Badge shared component ──────────────────────────────────────────
function SectionBadge({
  icon,
  label,
  highlight,
  borderColor = "#138808",
  textColor = "#1a1a1a",
  highlightColor = "#FFA500",
  textShadow,
}: {
  icon: string;
  label: string;
  highlight: string;
  borderColor?: string;
  textColor?: string;
  highlightColor?: string;
  textShadow?: string;
}) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 w-fit"
      style={{ border: `1px solid ${borderColor}`, boxShadow: "none" }}
    >
      <span className="flex items-center justify-center w-6 h-6">
        <Image src={icon} alt="" width={20} height={20} className="object-contain" />
      </span>
      <span
        className="tracking-widest uppercase font-normal"
        style={{ fontFamily: "var(--font-atkinson)", fontSize: "15px", textShadow }}
      >
        <span style={{ color: textColor }}>{label} </span>
        <span style={{ color: highlightColor }}>{highlight}</span>
      </span>
    </div>
  );
}

// ── How It Works step ───────────────────────────────────────────────
function Step({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="max-w-[200px]">
      <p className="text-white font-bold text-base mb-1"
        style={{ fontFamily: "var(--font-atkinson)" }}>{title}</p>
      <p className="text-white text-sm leading-snug"
        style={{ fontFamily: "var(--font-source-sans)" }}>{desc}</p>
    </div>
  );
}

const HOW_STEPS = [
  { title: "Download App", desc: "Get Good Citizen from the App Store. Register quickly with just your phone number." },
  { title: "Live GPS", desc: "Real-time high-precision GPS tracking updates the ambulance location instantly." },
  { title: "Get Alerted", desc: "Receive timely emergency alerts as ambulances approach your area." },
  { title: "Clear the Way", desc: "Use the app guidance to safely clear a path for urgent vehicles." },
  { title: "Stay Safe", desc: "Stay aware and help your community by following alert instructions." },
  { title: "Track Progress", desc: "Monitor ambulance movement live and know when help is arriving." },
];

const KEY_FEATURES = [
  { icon: "/icon/icon-1.png", title: "REAL-TIME ALERTS", desc: "Instant notifications ensure you're always aware when an ambulance is nearby." },
  { icon: "/icon/icons-2.png", title: "LOCATION-BASED ACCURACY", desc: "Advanced GPS ensures precise alerts without unnecessary disturbances." },
  { icon: "/icon/icons-3.png", title: "LOUD & CLEAR NOTIFICATIONS", desc: "Special alert tones designed to grab attention even in noisy environments." },
  { icon: "/icon/icons-4.png", title: "ULTRA-FAST RESPONSE", desc: "Optimized system to minimize delay between detection and alert." },
  { icon: "/icon/icons-5.png", title: "PRIVACY SAFE", desc: "No personal data sharing—your location is securely handled." },
];

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════
          SECTION 1 — Smart Alerts
      ══════════════════════════════════════════ */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-16 sm:pt-28 pb-12 sm:pb-[250px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* Left image */}
        <div className="flex items-center justify-center">
          <Image
            src="/im/Group 24.png"
            alt="Ambulance alert app"
            width={560}
            height={520}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain w-full max-w-[400px] lg:max-w-none"
            priority
          />
        </div>

        {/* Right text */}
        <div className="flex flex-col gap-5">
          <SectionBadge
            icon="/im/icons8-ambulance-96 copy 1 (1).png"
            label="Smart"
            highlight="Alerts"
            highlightColor="#FF0000"
            textShadow="2px 2px 6px rgba(0,0,0,0.25)"
          />

          <h2
            className="text-gray-900 leading-tight uppercase font-normal"
            style={{
              fontFamily: "var(--font-atkinson)",
              fontSize: "clamp(28px, 5vw, 50px)",
              textShadow: "2px 2px 6px rgba(0,0,0,0.25)",
            }}
          >
            For Smarter Cities
          </h2>

          <p className="text-black leading-relaxed font-normal"
            style={{ fontFamily: "var(--font-source-sans)", fontSize: "clamp(15px, 2vw, 18px)" }}>
            Our Ambulance Alert System is designed to bridge the critical gap between
            emergency vehicles and public awareness. Using real-time GPS tracking and
            intelligent notifications, we alert citizens when an ambulance is within
            proximity—helping reduce delays caused by traffic congestion.
          </p>

          <p className="text-black leading-relaxed font-normal"
            style={{ fontFamily: "var(--font-source-sans)", fontSize: "clamp(15px, 2vw, 18px)" }}>
            Every second matters in emergencies. With our system, communities become
            active participants in saving lives.
          </p>
        </div>

      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — How It Works
      ══════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-visible"
        style={{
          backgroundImage: 'url("/Rectangle 12.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-4 pb-16 sm:pb-28 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-start">
          <div className="space-y-14">
            {/* Badge */}
            <SectionBadge
              icon="/how it works 1 (1).png"
              label="How It"
              highlight="Works"
              borderColor="#FFA500"
              textColor="#ffffff"
              highlightColor="#FFA500"
            />

            {/* Steps — zigzag on desktop, vertical list on mobile */}
            <div className="hidden lg:block relative mt-16" style={{ height: "560px" }}>
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 900 560"
                preserveAspectRatio="none"
              >
                <path
                  d="M 40 110 C 170 20, 300 35, 380 95 C 470 170, 560 150, 620 170 C 700 190, 720 250, 660 300 C 620 340, 560 380, 480 430 C 360 480, 240 510, 140 540"
                  fill="none"
                  stroke="#FFA500"
                  strokeWidth="1.75"
                  strokeDasharray="2,8"
                  opacity="0.9"
                />
              </svg>
              <div className="absolute" style={{ left: "-3%", top: "20%" }}>
                <Step title={HOW_STEPS[0].title} desc={HOW_STEPS[0].desc} />
              </div>
              <div className="absolute" style={{ left: "15%", top: "-11%" }}>
                <Step title={HOW_STEPS[1].title} desc={HOW_STEPS[1].desc} />
              </div>
              <div className="absolute" style={{ left: "58%", top: "12%" }}>
                <Step title={HOW_STEPS[2].title} desc={HOW_STEPS[2].desc} />
              </div>
              <div className="absolute" style={{ left: "64%", top: "34%" }}>
                <Step title={HOW_STEPS[3].title} desc={HOW_STEPS[3].desc} />
              </div>
              <div className="absolute" style={{ left: "42%", top: "48%" }}>
                <Step title={HOW_STEPS[4].title} desc={HOW_STEPS[4].desc} />
              </div>
              <div className="absolute" style={{ left: "8%", top: "70%" }}>
                <Step title={HOW_STEPS[5].title} desc={HOW_STEPS[5].desc} />
              </div>
            </div>

            {/* Mobile zigzag steps */}
            <div className="lg:hidden relative mt-8" style={{ height: "720px" }}>
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 340 720"
                preserveAspectRatio="none"
              >
                <path
                  d="M 60 60 C 80 100, 200 110, 260 150 C 310 180, 310 230, 260 270 C 210 310, 80 320, 60 370 C 40 410, 180 430, 260 470 C 320 500, 320 540, 260 570 C 200 600, 80 610, 60 660"
                  fill="none"
                  stroke="#FFA500"
                  strokeWidth="1.75"
                  strokeDasharray="2,8"
                  opacity="0.9"
                />
              </svg>

              <div className="absolute" style={{ left: "0%", top: "0%" }}>
                <Step title={HOW_STEPS[0].title} desc={HOW_STEPS[0].desc} />
              </div>
              <div className="absolute" style={{ left: "45%", top: "16%" }}>
                <Step title={HOW_STEPS[1].title} desc={HOW_STEPS[1].desc} />
              </div>
              <div className="absolute" style={{ left: "0%", top: "34%" }}>
                <Step title={HOW_STEPS[2].title} desc={HOW_STEPS[2].desc} />
              </div>
              <div className="absolute" style={{ left: "45%", top: "51%" }}>
                <Step title={HOW_STEPS[3].title} desc={HOW_STEPS[3].desc} />
              </div>
              <div className="absolute" style={{ left: "0%", top: "67%" }}>
                <Step title={HOW_STEPS[4].title} desc={HOW_STEPS[4].desc} />
              </div>
              <div className="absolute" style={{ left: "45%", top: "83%" }}>
                <Step title={HOW_STEPS[5].title} desc={HOW_STEPS[5].desc} />
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-10">
              <SectionBadge
                icon="/ownership 1.png"
                label="Key"
                highlight="Features"
                borderColor="#1a1a1a"
                textColor="#1a1a1a"
                highlightColor="#1a1a1a"
              />

              <div className="mt-10 flex flex-col gap-8">
                {KEY_FEATURES.map((f) => (
                  <div key={f.title} className="flex items-start gap-6">
                    <div
                      className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        border: "2px dashed #138808",
                        background: "rgba(255,255,255,0.15)",
                      }}
                    >
                      <Image src={f.icon} alt={f.title} width={36} height={36} className="object-contain" />
                    </div>
                    <div>
                      <p
                        className="font-bold text-gray-900 uppercase mb-1"
                        style={{ fontFamily: "var(--font-atkinson)", fontSize: "clamp(14px, 2vw, 18px)" }}
                      >
                        {f.title}
                      </p>
                      <p
                        className="text-gray-800 leading-relaxed"
                        style={{ fontFamily: "var(--font-source-sans)", fontSize: "clamp(13px, 1.5vw, 16px)" }}
                      >
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative w-full h-full">
            <Image
              src="/Group 31.png"
              alt="Good Citizen app screenshot"
              width={700}
              height={1225}
              style={{ position: "relative", top: "-20%", width: "700px", height: "auto" }}
              className="object-contain max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — Why It Matters
      ══════════════════════════════════════════ */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-16 sm:pt-28 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 left-6 w-16 h-16 rounded-2xl bg-emerald-700 shadow-lg" />
            <div className="relative overflow-hidden rounded-[40px]">
              <Image
                src="/Why It Mattersleft image.png"
                alt="Why it matters illustration"
                width={900}
                height={540}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-8">
            <SectionBadge
              icon="/how it works 1 (1).png"
              label="Why It"
              highlight="Matters"
              borderColor="#22c55e"
              textColor="#1a1a1a"
              highlightColor="#22c55e"
              textShadow="2px 2px 6px rgba(0,0,0,0.25)"
            />

            <div className="space-y-4">
              <p
                className="text-slate-900 leading-tight"
                style={{ fontFamily: "var(--font-source-sans)", fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 400 }}
              >
                Traffic delays are one of the biggest challenges for emergency services. By simply notifying nearby citizens, we can significantly reduce response time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: "/icon 2/1.Faster ambulance movement.png", title: "Faster ambulance movement" },
                { icon: "/icon 2/Reduced emergency delays.png", title: "Reduced emergency delays" },
                { icon: "/icon 2/Increased survival rates.png", title: "Increased survival rates" },
                { icon: "/icon 2/Smarter, safer cities.png", title: "Smarter, safer cities" },
              ].map((item) => (
                <div key={item.title} className="relative rounded-[24px] border border-black bg-white px-5 pt-8 pb-5">
                  <div className="absolute left-5 w-[50px] h-[45px] flex items-center justify-center" style={{ top: "1px" }}>
                    <Image src={item.icon} alt={item.title} width={50} height={45} className="object-contain" />
                  </div>
                  <div className="mt-8">
                    <p style={{ fontFamily: "var(--font-source-sans)", fontSize: "15px", fontWeight: 400, color: "#000000" }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — FAQ header row
      ══════════════════════════════════════════ */}
      <div className="w-full flex">
        <div className="hidden sm:block w-[55%]" />
        <div className="bg-black flex items-center justify-center" style={{ borderTopLeftRadius: "47px", borderTopRightRadius: "47px", marginRight: "12%", marginLeft: "7%", height: "94px", flex: 1, paddingRight: "30px", paddingLeft: "30px" }}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2"
            style={{ border: "1px solid #FFA500" }}
          >
            <span className="text-orange-400 text-lg font-bold">?</span>
            <span
              className="tracking-widest uppercase font-normal text-orange-400"
              style={{ fontFamily: "var(--font-atkinson)", fontSize: "clamp(11px, 1.5vw, 15px)" }}
            >
              Frequently Asked Questions
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 4b — FAQ Content
      ══════════════════════════════════════════ */}
      <section
        className="w-full bg-black relative py-16 px-4 sm:px-8"
        style={{
          backgroundImage: 'url("/Group 36.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {[
            { q: "DO I NEED TO KEEP GPS ALWAYS ON?", a: "No. You only need location permission, the app alerts you automatically." },
            { q: "WILL I GET ALERTS ANYWHERE ?", a: "Alerts are sent based on your real-time GPS location within the ambulance's proximity zone." },
            { q: "IS MY DATA SAFE ?", a: "Yes. Your personal data is never shared. Location is securely processed and not stored." },
            { q: "IS THIS APP FREE ?", a: "Yes, Good Citizen is completely free to download and use on both Android and iOS." },
            { q: "DOES IT DRAIN MY BATTERY ?", a: "The app is optimized for minimal battery usage while keeping you alert when it matters most." },
            { q: "WHO VERIFIES THE AMBULANCE ?", a: "Ambulances are registered and verified through official emergency service partnerships." },
          ].map((item, i) => (
            <details
              key={i}
              className="group rounded-[14px] px-5 py-4 cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.3)", background: "rgba(0,0,0,0.4)" }}
            >
              <summary className="flex items-center justify-between list-none">
                <span
                  className="text-white font-normal tracking-wide"
                  style={{ fontFamily: "var(--font-atkinson)", fontSize: "clamp(12px, 1.5vw, 15px)" }}
                >
                  {item.q}
                </span>
                <span className="text-white text-xl transition-transform duration-200 group-open:rotate-45 inline-block ml-4">+</span>
              </summary>
              <p
                className="mt-3 text-gray-300 leading-relaxed"
                style={{ fontFamily: "var(--font-source-sans)", fontSize: "14px" }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — Footer / CTA
      ══════════════════════════════════════════ */}
      <section className="w-full relative bg-white">

        {/* BG image — top 65% of section */}
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            backgroundImage: 'url("/Group 37.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "65%",
          }}
        />

        {/* Title + subtitle */}
        <div className="relative z-10 text-center pt-14 px-4 sm:px-8 pb-6">
          <h2
            className="text-white font-normal tracking-widest uppercase"
            style={{ fontFamily: "var(--font-atkinson)", fontSize: "clamp(24px, 4vw, 36px)" }}
          >
            GOODCITIZEN
          </h2>
          <p
            className="text-white mt-3"
            style={{ fontFamily: "var(--font-source-sans)", fontSize: "clamp(13px, 2vw, 16px)", fontWeight: 400 }}
          >
            Making roads safer, one alert at a time. Join the community today.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" style={{ position: "relative", zIndex: 10 }}>

          {/* Contact card */}
          <div className="bg-gray-100 rounded-[24px] flex flex-col items-center py-10 px-6 sm:px-8 gap-4">
            <div className="flex items-center justify-center">
              <Image src="/icons.png" alt="Contact" width={56} height={56} className="object-contain" />
            </div>
            <p
              className="text-gray-900 font-normal tracking-widest uppercase mt-2"
              style={{ fontFamily: "var(--font-atkinson)", fontSize: "16px" }}
            >
              CONTACT
            </p>
            <p style={{ fontFamily: "var(--font-source-sans)", fontSize: "14px", color: "#333", textAlign: "center" }}>
              support@goodcitizenapp.com
            </p>
            <p style={{ fontFamily: "var(--font-source-sans)", fontSize: "14px", color: "#333", textAlign: "center" }}>
              goodcitizenapp.com India
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.013 8.333 0 8.741 0 12c0 3.259.013 3.667.072 4.947.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.987 8.741 24 12 24c3.259 0 3.667-.013 4.947-.072 1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039.059-1.28.072-1.688.072-4.947 0-3.259-.013-3.667-.072-4.947-.085-1.856-.601-3.698-1.942-5.039C20.645.673 18.803.157 16.947.072 15.667.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </div>
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.886v2.286h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </div>
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
            </div>
          </div>

          {/* Get Started card */}
          <div className="bg-gray-100 rounded-[24px] flex flex-col items-center py-10 px-6 sm:px-8 gap-4">
            <div className="flex items-center justify-center">
              <Image src="/Group 38.png" alt="Download" width={56} height={56} className="object-contain" />
            </div>
            <p
              className="text-gray-900 font-normal tracking-widest uppercase mt-2"
              style={{ fontFamily: "var(--font-atkinson)", fontSize: "16px" }}
            >
              GET STARTED
            </p>
            <button
              className="w-full rounded-full py-3 text-white font-normal tracking-wide"
              style={{ background: "#138808", fontFamily: "var(--font-source-sans)", fontSize: "15px" }}
            >
              Get it on Google Play
            </button>
            <button
              className="w-full rounded-full py-3 text-white font-normal tracking-wide"
              style={{ background: "#138808", fontFamily: "var(--font-source-sans)", fontSize: "15px" }}
            >
              Download on App Store
            </button>
          </div>

        </div>

        {/* Footer bar */}
        <div className="w-full px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10 sm:mt-[-68px]">
          <p style={{ fontFamily: "var(--font-source-sans)", fontSize: "13px", color: "#333", textAlign: "center" }}>
            © 2025 Good Citizen App — Making Roads Safer Together.
          </p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Support"].map((link) => (
              <a key={link} href="#" style={{ fontFamily: "var(--font-source-sans)", fontSize: "13px", color: "#333", textDecoration: "underline" }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
