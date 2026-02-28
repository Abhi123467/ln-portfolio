import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>

          <p className="text-slate-300 leading-8 text-lg">
            DevOps Engineer with hands-on experience in AWS, Terraform,
            Ansible, Docker, Kubernetes, Linux, and CI/CD automation.
            Focused on building scalable cloud infrastructure and reducing
            manual operations through Infrastructure as Code.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-6">
            Experienced in deploying microservices, automating infrastructure,
            and improving system reliability using modern DevOps practices.
            Passionate about cloud-native architecture, security, and
            continuous delivery pipelines.
          </p>

        </motion.div>

      </div>
    </section>
  );
}