import { motion } from "framer-motion";

const steps = [
  "Developer",
  "GitHub",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "AWS Cloud",
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          DevOps Workflow
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-4">

              <motion.div
                whileHover={{ scale: 1.08 }}
                className="bg-slate-800 border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-xl text-slate-200 shadow-lg transition"
              >
                {step}
              </motion.div>

              {index !== steps.length - 1 && (
                <span className="text-green-400 text-xl">→</span>
              )}

            </div>
          ))}
        </motion.div>

        <p className="text-green-400 font-mono mt-8">
          Automated CI/CD Pipeline for Cloud Deployment
        </p>

      </div>
    </section>
  );
}