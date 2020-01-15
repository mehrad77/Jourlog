interface Frontmatter {
  date: string;
  title: string;
  category: string;
  dir: 'ltr' | 'rtl';
  tags: string[];
  banner?: string;
  excerpt?: string;
}

export default Frontmatter;
