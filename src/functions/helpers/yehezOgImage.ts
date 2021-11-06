export const yehezOgImage = (text: string, isArticle: boolean): string => {
  if (isArticle) {
    return `https://yehez-og-image.yehezgun.com/**${encodeURIComponent(
      text.trim(),
    )}**%20%3Cbr%3E%20by%20YehezGun.png?theme=dark&md=1&fontSize=50px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1636202181%2Fpeep_amkhuu.svg&widths=250&heights=250`;
  }
  return `https://yehez-og-image.yehezgun.com/**${encodeURIComponent(
    text.trim(),
  )}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1634043457%2Fyehez-avatar_u3q505.png&widths=250&heights=250`;
};
