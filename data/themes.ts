export const themes = [
  {
    title: "Nucleation and growth in 2D systems",
    copy: "Exploring natural systems through physical principles, structure, and dynamics.",
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
    title: "Computational Methods",
    copy: "Connecting simulation, molecular modelling, and chemical insight to physical sciences.",
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
    title: "Nonequilibrium systems with memory",
    copy: "Designing and studying systems which can retain information about their past states.",
    images: [
      {
        src: "/images/research/am2c16943_0004.svg",
        caption: "AFM images over successive cycles",
        alt: "Four atomic force microscopy panels showing a bare Si wafer and the surface after 1, 2 and 3 cycles, with surface features increasing in density",
        imageClassName: "object-contain object-center scale-100"
      },
      {
        src: "/images/research/cell_ratchet.png",
        caption: "Macroscopic cell in ratchet",
        alt: "Macroscopic robotic cell confined in a ratchet channel",
        imageClassName: "object-contain object-center scale-100"
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
