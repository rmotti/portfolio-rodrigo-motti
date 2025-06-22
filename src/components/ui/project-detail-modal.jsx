
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <div>
            <h4 className="font-semibold mb-2">O Desafio:</h4>
            <p className="text-sm text-muted-foreground">{project.challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">A Solução:</h4>
            <p className="text-sm text-muted-foreground">{project.solution}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resultados:</h4>
            <p className="text-sm text-muted-foreground">{project.results}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tecnologias:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver Projeto
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                <Github className="h-4 w-4 mr-2" />
                Código
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;

