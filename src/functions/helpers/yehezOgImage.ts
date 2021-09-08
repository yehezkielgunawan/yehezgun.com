export const yehezOgImage = (text: string, isArticle: boolean) => {
  if (isArticle) {
    return `https://yehez-og-image.yehezgun.com/**${encodeURIComponent(
      text.trim(),
    )}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=50px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg&widths=250&heights=250`;
  }
  return `https://yehez-og-image.yehezgun.com/**${encodeURIComponent(
    text.trim(),
  )}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630987481%2FYG_logo_trg6fp.png&widths=200&heights=200`;
};