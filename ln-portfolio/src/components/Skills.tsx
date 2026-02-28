import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Container,
  GitBranch,
  Terminal,
  Network,
} from "lucide-react";

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function SkillCard({ icon, title, desc }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-slate-800/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-blue-500 transition duration-300"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >

          <SkillCard
            icon={<Cloud size={32} />}
            title="Cloud"
            desc="AWS (EC2, VPC, IAM, ALB, Route53)"
          />

          <SkillCard
            icon={<Server size={32} />}
            title="Infrastructure as Code"
            desc="Terraform, Ansible Automation"
          />

          <SkillCard
            icon={<Container size={32} />}
            title="Containers"
            desc="Docker, Kubernetes (EKS)"
          />

          <SkillCard
            icon={<GitBranch size={32} />}
            title="CI/CD"
            desc="Jenkins, GitHub, Git Flow"
          />

          <SkillCard
            icon={<Terminal size={32} />}
            title="Linux & Scripting"
            desc="RHEL, Bash Automation, System Admin"
          />

          <SkillCard
            icon={<Network size={32} />}
            title="Networking"
            desc="Nginx, DNS, Reverse Proxy, CIDR"
          />

        </motion.div>

      </div>
    </section>
  );
}