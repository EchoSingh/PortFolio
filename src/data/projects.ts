export const projects = [
  {
    id: 1,
    title: "Face Aging Using Conditional GAN",
    description: "Built a GAN-based pipeline to generate aged versions of children’s faces to aid in missing person recovery efforts. Utilized a Conditional GAN (cGAN) framework trained on facial age progression datasets. Received a Bronze Medal on Kaggle with 12+ upvotes.",
    image: "https://c8.alamy.com/comp/2T0M7GR/skin-aging-face-changes-of-a-woman-illustration-2T0M7GR.jpg",  // Converted to direct image link
    tags: ["Python", "TensorFlow", "OpenCV", "GANs", "Kaggle"],
    githubUrl: "https://www.kaggle.com/code/adi2606/face-aging-using-conditional-gan"
  },
  {
    id: 2,
    title: "Menstrual Health Awareness Model",
    description: "Developed a model to answer questions about menstrual health using a sequence-to-sequence architecture, achieving an accuracy of 85%. Includes a working interface on Hugging Face.",
    image: "https://huggingface.co/adi2606/Menstrual-Health-Awareness-Chatbot/resolve/main/main%20model.jpg", // Changed blob to resolve
    tags: ["Python", "Hugging Face", "Transformers", "PyTorch", "Google Cloud"],
    githubUrl: "https://huggingface.co/adi2606/Menstrual-Health-Awareness-Chatbot"
  },
  {
    id: 3,
    title: "CarGoPlus (Car Rental Management System)",
    description: "Developed a user-friendly car rental management system to efficiently manage car inventory, customer data, and rental transactions. Implemented a GUI using wxWidgets and integrated with a MySQL database.",
    image: "https://github.com/EchoSingh/CarGoPlus/raw/master/Screenshots/1.jpg", // Changed blob to raw
    tags: ["C++", "wxWidgets", "MySQL", "Visual Studio"],
    githubUrl: "https://github.com/EchoSingh/CarGoPlus"
  }
];
