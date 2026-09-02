export const themes = [
  {
    title: "Biophysics",
    copy: "Exploring living matter through physical principles, structure, and dynamics.",
    images: [
      {
        src: "/images/research/Cluster.png",
        caption: "Epithelial monolayer on glass",
        alt: "Fluorescence image of an epithelial monolayer cultured on glass",
        imageClassName: "object-cover object-center scale-100"
      },
      {
        src: "/images/research/dapiheart.png",
        caption: "Microscopic image of cell nuclei",
        alt: "DAPI-stained cell nuclei imaged under a microscope",
        imageClassName: "object-cover object-center scale-100"
      },
      {
        src: "/images/research/epithelial.png",
        caption: "Epithelial cell-cell junction",
        alt: "Microscopy image of a junction between epithelial cells",
        imageClassName: "object-cover object-center scale-100"
      }
    ]
  },
  {
    title: "Computational Chemistry",
    copy: "Connecting simulation, molecular modelling, and chemical insight to life sciences.",
    images: [
      {
        src: "/images/research/ball_milling_collision.png",
        caption: "Ball milling collision",
        alt: "Molecular dynamics rendering of a ball milling collision",
        imageClassName: "object-cover object-center scale-100"
      },
      {
        src: "/images/research/Picture3.png",
        caption: "Protein-scale structure",
        alt: "Ball-and-stick rendering of a protein-scale molecular structure",
        imageClassName: "object-cover object-center scale-[1.05]"
      },
      {
        src: "/images/research/Picture5.png",
        caption: "Molecule in a solvent box",
        alt: "Simulation rendering of a molecule solvated inside a periodic box",
        imageClassName: "object-cover object-center scale-[1.45]"
      }
    ]
  },
  {
    title: "Robotics and Soft Active Matter",
    copy: "Designing and building robots that can interact with and adapt to their environment.",
    images: [
      {
        src: "/images/research/graspion.png",
        caption: "Grasp-ion bot",
        alt: "Close-up photograph of the Grasp-ion robot",
        imageClassName: "object-cover object-center scale-100"
      },
      {
        src: "/images/research/cell_ratchet.png",
        caption: "Macroscopic cell in ratchet",
        alt: "Macroscopic robotic cell confined in a ratchet channel",
        imageClassName: "object-cover object-center scale-100"
      },
      {
        src: "/images/research/Bot_tissue.png",
        caption: "Macroscopic cell assembly",
        alt: "A macroscopic assembly of robotized cells",
        imageClassName: "object-cover object-center scale-100"
      }
    ]
  }
] as const;
