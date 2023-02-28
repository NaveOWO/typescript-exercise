type Category = "한식" | "중식" | "일식" | "아시안" | "양식";
interface Essential {
  category: Category;
  name: string;
  distance: 5 | 10 | 15 | 20 | 30;
}

interface Options {
  description: string;
  link: string;
}

interface Restaurant {
  essential: Essential;
  option: Options | null;
}

function add(restaurant: Restaurant) {}

function filterByCategory(category: Category) {}
