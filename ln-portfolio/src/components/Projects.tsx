import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="project" className="py-24 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Project
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-slate-700 hover:border-blue-500 transition shadow-xl"
        >

          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Cloud-Native E-Commerce Microservices Platform
          </h3>

          <p className="text-slate-300 leading-8 mb-8">
            Designed and deployed a scalable 3-tier microservices architecture
            on AWS using Terraform, Docker, Kubernetes, and Ansible automation.
            Fully automated infrastructure provisioning and deployment pipelines
            improved scalability, reliability, and deployment efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-slate-300">

            <ul className="space-y-2">
              <li>✔ 13 Microservices Architecture</li>
              <li>✔ Terraform Infrastructure Automation</li>
              <li>✔ Kubernetes Workload Orchestration</li>
              <li>✔ Docker Image Optimization</li>
            </ul>

            <ul className="space-y-2">
              <li>✔ 90% Faster Infrastructure Setup</li>
              <li>✔ 70% Reduction in Manual Operations</li>
              <li>✔ Auto Scaling + Load Balancer</li>
              <li>✔ Bastion Host Security Architecture</li>
            </ul>

          </div>

        </motion.div>

      </div>
    </section>
  );
}