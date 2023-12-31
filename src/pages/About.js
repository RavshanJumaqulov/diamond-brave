import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Context from "../Context";
import { Masonry } from "@mui/lab";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

export default function About() {
  const { lan, width } = useContext(Context);
  const navigate = useNavigate();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [navigate]);
  return (
    <Box sx={{ width: "100%" }}>
      <Box component="img" src="/top.jpg" sx={{ width: "100%" }} />
      <Container maxWidth="xl">
        <Box sx={{ mt: 5 }}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              alignItems: {
                xs: "start",
                md: "center",
              },
              justifyContent: { xs: "space-between", md: "space-between" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
                fontWeight: 700,
                fontFamily: "Nunito, sans-serif",
                color: "#011a41",
                mb: 3,
              }}
            >
              {lan == "uz"
                ? "Biz haqimizda"
                : lan == "en"
                ? "About us"
                : "О нас"}
            </Typography>
          </Stack>
          <Masonry columns={{ xs: 1, md: 2 }} spacing={2}>
            {lan == "uz" ? (
              <Box
                sx={{
                  width: "50%",
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Nunito, sans-serif",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  textIndent: 40,
                }}
              >
                O'zbekiston Respublikasida keyingi yillarda dorivor
                o'simliklarni yetishtirish va qayta ishlab chiqarish sohasida
                juda katta imkoniyatlar berilayotgani sabab 2022 - yilda{" "}
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                kompaniyasiga asos solindi.{" "}
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                kompaniyasi G'ayratov Qo'rg'on Qo'chqorovich va Muxtorova
                Shaxnoza Baxronovna tomonidan tashkil etilgan bo'lib, hozirda
                O'zbekiston Respublikasi farmasevtika bozoriga jadal kirib
                bormoqda.
              </Box>
            ) : lan == "en" ? (
              <Box
                sx={{
                  width: "50%",
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Nunito, sans-serif",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  textIndent: 40,
                }}
              >
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                company was founded in 2022 due to the huge opportunities in the
                field of cultivation and reproduction of medicinal plants in the
                Republic of Uzbekistan. The company{" "}
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                was founded by Ghairatov Korgon Kochkarovich and Mukhtorova
                Shakhnoza Bakhronovna, and is now rapidly entering the
                pharmaceutical market of the Republic of Uzbekistan.
              </Box>
            ) : (
              <Box
                sx={{
                  width: "50%",
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Nunito, sans-serif",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  textIndent: 40,
                }}
              >
                Компания{" "}
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                была основана в 2022 году в связи с большими возможностями в
                сфере выращивания и размножения лекарственных растений в
                Республике Узбекистан. Компания{" "}
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                основана Гайратовым Коргоном Кочкаровичем и Мухторовой Шахнозой
                Бахроновной и сейчас стремительно выходит на фармацевтический
                рынок Республики Узбекистан.
              </Box>
            )}
            <Box
              component="img"
              src="/img/about_page_1.jpg"
              sx={{
                width: "50%",
                objectFit: "contain",
                borderRadius: 3,
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              }}
            />

            {width > 900 ? (
              <>
                <Box
                  component="img"
                  src="/img/about_page_2.jpg"
                  sx={{
                    width: "50%",
                    objectFit: "contain",
                    borderRadius: 3,
                    boxShadow:
                      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                  }}
                />
                <Box
                  sx={{
                    width: "50%",
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: "Nunito, sans-serif",
                    textAlign: "justify",
                    textJustify: "inter-word",
                    textIndent: 40,
                  }}
                >
                  <Typography sx={{ fontWeight: 700, display: "inline" }}>
                    «DIAMOND BRAVE WORLD PHARM»
                  </Typography>{" "}
                  {lan == "uz"
                    ? `bugungi kunda biologik faol qo'shimchalar ishlab chiqarishda
                  mahalliy farmatsevtika bozorining yetakchilaridan biri
                  hisoblanib, iste'molchilarning sog'lig'i va talablariga javob
                  beradigan zamonaviy, sifatli va arzon ozuqaviy qo'shimchalarni
                  yetkazib berishda faol hizmat ko'rsatib kelmoqda. Kompaniya
                  dorivor o'simliklarni qayta ishlashda Abu Ali Ibn Sino singari
                  buyuk allomalar va hozirgi fan yutuqlari asosidagi mukammal
                  texnologiyalar bilan uyg'unlikda biologik faol qo'shimchalar
                  ishlab chiqaradi va marketingi bilan shug'llanib kelmoqda.
                  Kompaniya kelgusida o'zi ishlab chiqaradigan mahsulotlar sononi
                  ko'paytirish va O'rta osiyo va Osiyoning boshqa davlatlariga
                  eksport qilish kabi maqsadlarni rejalashtirmoqda.`
                    : lan == "en"
                    ? `today produces biologically active supplements
                  one of the leaders of the domestic pharmaceutical market
                  considering the health and requirements of consumers
                  modern, high-quality and affordable nutritional supplements
                  has been actively involved in delivery. Company
                  like Abu Ali Ibn Sina in processing medicinal plants
                  perfect based on great scientists and current scientific achievements
                  biologically active additives in combination with technologies
                  produces and is engaged in marketing.
                  The company has a number of products that it will produce in the future
                  increase and to other countries of Central Asia and Asia
                  is planning such goals as exporting.`
                    : `сегодня производит биологически активные добавки.
                  один из лидеров отечественного фармацевтического рынка
                  учитывая здоровье и требования потребителей
                  современные, качественные и доступные пищевые добавки
                  активно участвовал в доставке. Компания
                  как Абу Али ибн Сина в обработке лекарственных растений
                  идеальное, основанное на великих учёных и современных научных достижениях
                  биологически активные добавки в сочетании с технологиями
                  производит и занимается маркетингом.
                  У компании есть ряд продуктов, которые она будет производить в будущем.
                  увеличение и в другие страны Средней Азии и Азии
                  планирует такие цели, как экспорт.`}
                </Box>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    width: "50%",
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: "Nunito, sans-serif",
                    textAlign: "justify",
                    textJustify: "inter-word",
                    textIndent: 40,
                  }}
                >
                  <Typography sx={{ fontWeight: 700, display: "inline" }}>
                    «DIAMOND BRAVE WORLD PHARM»
                  </Typography>{" "}
                  bugungi kunda biologik faol qo`shimchalar ishlab chiqarishda
                  mahalliy farmatsevtika bozorining yetakchilaridan biri
                  hisoblanib, iste'molchilarning sog'lig'i va talablariga javob
                  beradigan zamonaviy, sifatli va arzon ozuqaviy qo'shimchalarni
                  yetkazib berishda faol hizmat ko'rsatib kelmoqda. Kompaniya
                  dorivor o`simliklarni qayta ishlashda Abu Ali Ibn Sino singari
                  buyuk allomalar va hozirgi fan yutuqlari asosidagi mukammal
                  texnologiyalar bilan uyg`unlikda biologik faol qo`shimchalar
                  ishlab chiqaradi va marketingi bilan shug`llanib kelmoqda.
                  Kompaniya kelgusida o`zi ishlab chiqaradigan mahsulotlar
                  sononi ko`paytirish va O`rta osiyo va Osiyoning boshqa
                  davlatlariga eksport qilish kabi maqsadlarni rejalashtirmoqda.
                </Box>
                <Box
                  component="img"
                  src="/img/about_page_1.png"
                  sx={{
                    width: "50%",
                    height: 400,
                    objectFit: "contain",
                  }}
                />
              </>
            )}
          </Masonry>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}
        ></Box>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} md={6} sx={{ alignSelf: "center" }}>
            <Slider {...settings}>
              <Box
                sx={{
                  height: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
                    fontWeight: 700,
                    fontFamily: "Nunito, sans-serif",
                    color: "#011a41",
                  }}
                >
                  {lan == "uz"
                    ? "Bizning maqsadimiz"
                    : lan == "en"
                    ? "Our goal"
                    : "Наша цель"}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: "Nunito, sans-serif",
                    color: "#011a41",
                  }}
                >
                  {lan == "uz"
                    ? "Dorivor o`simliklar xom ashyo bazasidan samarali foydalanish, qayta ishlashni qo`llab-quvvatlash orqali qo`shimcha qiymat zanjirini yaratish va davolashda ulardan keng foydalanishni tashkil etish."
                    : lan == "en"
                    ? "Эффективное использование сырьевой базы лекарственных растений, создание цепочки добавленной стоимости за счет поддержки переработки и организации их широкого использования в лечении."
                    : "Effective use of raw material base of medicinal plants, creation of added value chain by supporting processing and organizing their wide use in treatment."}
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
                    fontWeight: 700,
                    fontFamily: "Nunito, sans-serif",
                    color: "#011a41",
                  }}
                >
                  {lan == "uz"
                    ? "Bizning vazifamiz"
                    : lan == "en"
                    ? "Our mission"
                    : "Наша миссия"}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: "Nunito, sans-serif",
                    color: "#011a41",
                  }}
                >
                  {lan == "uz"
                    ? "Insonlarni yanada sog'lomroq yashashlari uchun innovatsion bio-faol mahsulotlarini taklif qilish hamda mas'uliyat, tezlik, jamoaviy mehnat orqali mahsulotlarimizni hamyonbob narxlarda yetqazib berishdir."
                    : lan == "en"
                    ? "It is to offer innovative bio-active products for people to live healthier and to deliver our products at affordable prices through responsibility, speed and teamwork."
                    : "Целью нашей компании является предложение инновационных биоактивных продуктов, позволяющих людям вести более здоровый образ жизни, и поставка нашей продукции по доступным ценам благодаря ответственности, скорости и командной работе."}
                </Typography>
              </Box>
            </Slider>
          </Grid2>
          <Grid2 xs={12} md={6} sx={{ alignSelf: "center" }}>
            <Slider {...settings} style={{ maxHeight: 400, minHeight: 400 }}>
              <Box
                sx={{
                  width: "50%",
                  boxShadow:
                    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src="/bizning_vaz.jpg"
                  sx={{
                    width: "100%",
                    borderRadius: 3,
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "50%",
                  boxShadow:
                    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src="/bizning_maq.jpg"
                  sx={{
                    width: "100%",
                    borderRadius: 3,
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Slider>
          </Grid2>
        </Grid2>
        <Grid2
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid2 xs={12} md={6} sx={{ alignSelf: "center" }}>
            <Box
              component="img"
              src="/company.jpg"
              sx={{ width: "100%", borderRadius: 3, objectFit: "contain", boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)", }}
            />
          </Grid2>
          <Grid2 xs={12} md={6} sx={{ alignSelf: "center" }}>
            {lan == "uz" ? (
              <Box
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Nunito, sans-serif",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»{" "}
                </Typography>
                sifatli hamda samarali davolashni ta’minlovchi zamonaviy
                biologik faol qo’shimchalarning keng turini taklif etadi.
                Bugungi kunda{" "}
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>
                ning mahsulot portfeli 30 dan ortiq. Mahsulotlarni O’zbekiston
                respublikasining barcha hududlarida marketingi tashkil etilgan.
              </Box>
            ) : lan == "en" ? (
              <Box
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Nunito, sans-serif",
                  textAlign: "justify",
                }}
              >
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                offers a wide range of modern biologically active supplements
                that provide high-quality and effective treatment. Today, the
                product portfolio of{" "}
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                is more than 30. Marketing of products is organized in all
                regions of the Republic of Uzbekistan.
              </Box>
            ) : (
              <Box
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Nunito, sans-serif",
                  textAlign: "justify",
                }}
              >
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                предлагает широкий ассортимент современных биологически активных
                добавок, обеспечивающих качественное и эффективное лечение.
                Сегодня продуктовый портфель{" "}
                <Typography sx={{ fontWeight: 700, display: "inline" }}>
                  «DIAMOND BRAVE WORLD PHARM»
                </Typography>{" "}
                составляет более 30. Сбыт продукции организован во всех регионах
                Республики Узбекистан.
              </Box>
            )}
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
