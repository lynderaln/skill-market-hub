import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SkillMarketHub() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl">
        <CardContent className="p-8 text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">🚀 Skill Market Hub 🚀</h1>
          <p className="text-lg text-gray-600">
            Skill Market Hub is a platform designed to connect people with skills
            (art, tech, crafts, tutoring, etc.) to those who need them. Our goal is
            to empower young people, freelancers, and small businesses by giving
            them visibility and opportunities.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">Why Support Us?</h2>
            <ul className="text-left space-y-2 text-gray-700">
              <li>✔️ Help us cover essential costs: domain, hosting, and tools.</li>
              <li>✔️ Empower youth and freelancers to showcase and monetize skills.</li>
              <li>✔️ Be part of a project that supports innovation and community growth.</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">Sponsorship Benefits</h2>
            <p className="text-gray-700">
              As a sponsor, your brand/logo will be featured on the platform, acknowledged on our social media, and associated with a project that directly uplifts communities.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">📞 Contact Information</h2>
            <p className="text-gray-700">Name: Lynder Angwenyi</p>
            <p className="text-gray-700">Location: Kisii, Kenya</p>
            <p className="text-gray-700">Phone: 0715672771</p>
            <p className="text-gray-700">Email: lynderangwenti8282@gmail.com</p>
          </div>

          <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">
            Become a Sponsor
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
