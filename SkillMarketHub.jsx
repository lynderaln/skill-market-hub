export default function SkillMarketHub() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Skill Market Hub</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        Skill Market Hub is a platform designed to connect learners and experts
        in various fields, fostering collaboration, mentorship, and growth.
        We are seeking sponsorships and partnerships to bring this vision to life.
      </p>

      <a
        href="mailto:lynderangwenyi@example.com"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Sponsor Us
      </a>
    </div>
  );
}