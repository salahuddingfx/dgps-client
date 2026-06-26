import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../animations";

export default function TeacherCard({ teacher, className }) {
  return (
    <motion.div
      {...fadeInUp}
      viewport={viewportConfig}
      className={cn(
        "bg-white rounded-2xl border border-border shadow-card hover-lift overflow-hidden text-center p-6",
        className
      )}
    >
      <Avatar
        name={teacher.name}
        size="xl"
        className="mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-heading font-poppins">{teacher.name}</h3>
      <Badge variant="primary" className="mt-2 mb-3">{teacher.designation}</Badge>
      <p className="text-sm text-paragraph mb-1">{teacher.qualification}</p>
      <p className="text-sm text-paragraph mb-3">Experience: {teacher.experience}</p>
      <div className="flex flex-wrap gap-1.5 justify-center">
        {teacher.subjects?.map((subject, i) => (
          <Badge key={i} variant="muted" className="text-xs">{subject}</Badge>
        ))}
      </div>
    </motion.div>
  );
}
