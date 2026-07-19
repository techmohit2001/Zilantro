import Image from "next/image";

const team = [
  { name: "Lucky Tanwar", role: "Director", src: "/about-team1.png" },
  { name: "Kavinder Kasana", role: "Director", src: "/about-team2.png" },
  { name: "Sunil Nanda", role: "Director of Preconstruction", src: "/about-team3.png" },
  { name: "Gautam Sharma", role: "VP of Construction", src: "/about-team6.png" },
  { name: "Vineet", role: "Project Manager", src: "/about-team4.png" },
  { name: "Dhruv Sharma", role: "Project Manager", src: "/about-team5.png" },
  { name: "Aman Kumar", role: "Project Manager", src: "/about-team7.png" },
  { name: "Sachin Kumar", role: "Project Manager", src: "/about-team8.png" },
  { name: "Shikha Sharma", role: "HR / Admin Head", src: "/about-team9.png" },
  { name: "Vidushi Yadav", role: "Marketing Manager", src: "/about-team11.png" },
  { name: "Nakul Dhaima", role: "Site Supervisor", src: "/about-team10.png" },
  { name: "Kaptan Singh", role: "Site Supervisor", src: "/about-team12.png" },
  { name: "Sunil Rathi", role: "Site Supervisor", src: "/about-team13.png" },
];

export default function TeamSection() {
  return (
    <section className="bg-white pt-0 pb-10 font-outfit lg:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <p className="mb-3 text-xs font-normal uppercase tracking-[0.16em] text-[#706F6C] sm:text-sm">
            The Team
          </p>
          <h2 className="font-cormorant text-[1.875rem] font-semibold leading-[1.15] text-charcoal sm:text-4xl lg:text-[2.75rem]">
            People Who Make <span className="text-gold">It Happen</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden border border-transparent bg-[#F5F1EB] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-gold hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-medium text-charcoal sm:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-[#706F6C] sm:text-sm">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
