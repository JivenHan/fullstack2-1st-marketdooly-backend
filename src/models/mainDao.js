import prisma from "../../prisma";

const getCategories = async () => {
  return await prisma.$queryRaw`
  SELECT  c.name
        , sc.name
  FROM  categories c
  JOIN  sub_categories sc
  ON    c.id = sc.id;
  `;
};

const getBanner = async (group) => {
  return await prisma.$queryRaw`
  SELECT  b.id
        , b.group
        , b.image
        , b.link
        , b.type
        , b.header
        , b.description
  FROM  banners b
  WHERE b.group = ${group};
  `;
};

const getEvent = async (group) => {
  return await prisma.$queryRaw`
  SELECT  e.id
        , e.group
        , e.type
        , i.product_image
        , e.header
        , e.description
  FROM    events e
  JOIN    products p
    ON    e.product_id = p.id
  JOIN    images i
    ON    p.id = i.product_id
  WHERE e.group = ${group}
  `
}

export default {
  getCategories,
  getBanner,
  insertBannerData,
  getEvent,
  insertEventData
}