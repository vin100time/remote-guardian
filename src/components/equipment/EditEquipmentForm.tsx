
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface EditEquipmentFormProps {
  equipment: {
    id: number;
    name: string;
  };
  onClose: () => void;
}

export const EditEquipmentForm = ({ equipment, onClose }: EditEquipmentFormProps) => {
  const [name, setName] = useState(equipment.name);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simuler la mise à jour
    console.log("Updating equipment name to:", name);
    
    toast({
      title: "Équipement mis à jour",
      description: "Les modifications ont été enregistrées avec succès."
    });
    
    onClose();
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={onClose}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Button>
        <h2 className="text-2xl font-bold">Modifier l'équipement</h2>
        <p className="text-muted-foreground">
          Modifiez les informations de l'équipement ci-dessous
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nom de l'équipement</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez le nom de l'équipement"
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button type="submit">
            Enregistrer
          </Button>
        </div>
      </form>
    </Card>
  );
};
