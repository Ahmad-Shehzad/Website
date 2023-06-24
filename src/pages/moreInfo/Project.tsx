interface Project {
  name: string;
  summary: string;
  imageUrl: string;
  details: Details[];
  privacyPolicy: string[];
}

interface Details {
  title: string;
  content: string;
}
