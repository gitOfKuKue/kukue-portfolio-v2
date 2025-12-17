import { create } from "zustand";

// icons import
import microsoft from "@/src/assets/icons/office.png";
import adobePhotoshop from "@/src/assets/icons/photoshop.png";
import adobeIllustrator from "@/src/assets/icons/illustrator.png";
import postman from "@/src/assets/icons/postman.svg";

interface Ability {
    description: string;
    skills: Skill[];
}

interface Skill {
    name: string;
    icon: string;
}

interface SkillsState {
    tools: Ability;
    hardSkills: Ability;
    softSkills: Ability;
}

const useSkills = create<SkillsState>((set) => ({
    tools: {
        description: "Tools I use regularly",
        skills: [
            {
                name: "Microsoft Office",
                icon: microsoft,
            },
            {
                name: "Adobe Photoshop",
                icon: adobePhotoshop,
            },
            {
                name: "Adobe Illustrator",
                icon: adobeIllustrator,
            },
            {
                name: "Postman",
                icon: postman,
            },
        ],
    },
    hardSkills: {
        description: "Hard skills I possess",
        skills: [],
    },
    softSkills: {
        description: "Soft skills I possess",
        skills: [],
    },
}));