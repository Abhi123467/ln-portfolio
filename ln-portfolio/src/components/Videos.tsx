import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Videos() {
  const videos = [
    {
      title: "Terraform Infrastructure Provisioning",
      videoId: "h7LDnVsNRVI",
    },
    {
      title: "Kubernetes Deployment Execution",
      videoId: "s_o8dwzRlu4",
    },
    {
      title: "Jenkins CI/CD Pipeline Demo",
      videoId: "gLptmcuCx6Q",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Project Demo Videos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">

          {videos.map((video, index) => (
            <motion.a
              key={video.title}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 shadow-lg transition"
            >

              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full"
                />

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <Play className="text-white w-14 h-14" />
                </div>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-white font-semibold">
                  {video.title}
                </h3>
              </div>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}