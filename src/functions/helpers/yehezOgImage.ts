export const yehezOgImage = (text: string, isArticle: boolean) => {
  if (isArticle) {
    return `https://yehez-og-image.yehezgun.com/**${encodeURIComponent(
      text.trim(),
    )}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=50px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg&widths=250&heights=250`;
  }
  return `https://yehez-og-image.yehezgun.com/**${encodeURIComponent(
    text.trim(),
  )}**%20%7C%20Yehezgun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1631970666%2Fyehez_avatar_vkv7pc.png&widths=300&heights=300`;
};
