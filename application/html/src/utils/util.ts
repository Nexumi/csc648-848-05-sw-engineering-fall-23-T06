export function sortBy(objects: any, key: string, direction: string | number) {
  direction = Number(direction);
  
  if (!objects || !key) {
    return objects;
  }

  objects = [...objects];
  
  const sorted = objects.sort((a: any, b: any) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  });

  return direction == 0 ? sorted : sorted.reverse();
}

export function getURL(retailer: string) {
  switch (retailer.toLowerCase()) {
    case "amazon":
      return "https://www.amazon.com/";
    case "best buy":
      return "https://www.bestbuy.com/";
    case "ebay":
      return "https://www.ebay.com/";
    case "target":
      return "https://www.target.com/";
    case "walmart":
      return "https://www.walmart.com/";
    default:
      return null;
  }
}