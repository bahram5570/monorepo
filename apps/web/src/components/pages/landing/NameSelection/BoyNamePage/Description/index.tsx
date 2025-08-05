'use client';

import { COLORS_LIST } from '@theme/colors';

import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow2.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { textShorter } from '@utils/scripts';

const Description = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;

    setTimeout(() => {
      if (el) {
        setMaxHeight(el.scrollHeight);
      }
    }, 2000);
  }, []);

  const firstLineScript =
    'اسم پسر تک و شیک باید خوش‌آهنگ و روان باشه تا راحت تلفظ بشه و در ذهن بمونه. یه اسم پسر کمیاب و خوش‌آوا باعث می‌شه فرزندتون حس خوبی نسبت به اسمش بگیره و همیشه با افتخار ازش استفاده کنه.';

  return (
    <div className="w-full rounded-2xl p-6" style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}>
      <CustomTypography fontSize="Headline_Medium" color={'Neutral_OnBackground'} tagType="h2" className="pb-7">
        در انتخاب اسم پسر به چه نکاتی باید توجه کنیم؟
      </CustomTypography>

      <CustomTypography fontSize="Body_Large" color={'Neutral_OnBackground'} className="pb-3">
        وقتی به لیست بلند بالای اسم‌های پسرانه جدید و شیک نگاه می‌کنی، ممکنه کمی گیج بشی. برای انتخاب اسم پسر خاص و تک
        باید حسابی بهش فکر کنین چون این اسم قراره تا همیشه همراه بچه شما باشه و هویتش رو بسازه. اگه تازه وارد مسیر شیرین
        بارداری شدی و هنوز سوالای زیادی تو ذهنت هست، یه سر به مقاله{' '}
        <LinkGenerator href="/pregnancy"> بارداری</LinkGenerator> بزن تا با نکات کاربردی این دوران بیشتر آشنا شی.
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" color={'Neutral_OnBackground'} className="pb-3">
        در ادامه، چند تا نکته هست که بهتره تو انتخاب قشنگ‌ترین اسم‌های پسرانه در نظر بگیری
      </CustomTypography>

      <TitleGenerator tagType="h3">1.انتخاب اسم پسر گوش‌نواز و روان</TitleGenerator>
      <TextGenerator>{isOpen ? firstLineScript : textShorter(firstLineScript, 120)}</TextGenerator>

      <div
        ref={ref}
        style={{ maxHeight: isOpen ? maxHeight : 0 }}
        className="w-full h-fit flex flex-col duration-500 overflow-hidden"
      >
        <TitleGenerator tagType="h3">2. توجه به معنی و ریشه اسم پسر</TitleGenerator>
        <TextGenerator>
          معنی اسم پسرانه خیلی مهمه؛ اسمی که انتخاب می‌کنین باید بار معنایی مثبت، پرانرژی و الهام‌بخش داشته باشه. معنی
          اسم پسر باید حس قدرت، احترام و اعتماد به نفس رو در دل فرزندتون زنده کنه. همچنین توجه به ریشه اسم پسرانه و
          تناسب آن با فرهنگ و پیشینه خانوادگی باعث می‌شه که اون اسم بیشتر برای خانواده معنادار باشه و حس تعلق خاطر ایجاد
          کنه.
        </TextGenerator>

        <TitleGenerator tagType="h3">3.انتخاب اسم پسر براساس نام خانوادگی</TitleGenerator>
        <TextGenerator>
          گاهی اسم پسر به تنهایی جذابه ولی وقتی با نام خانوادگی ترکیب می‌شه، ممکنه سخت تلفظ بشه یا ناموزون به نظر برسه.
          حواستون باشه که اسم پسر جدید و امروزی 1404 با نام خانوادگی وزن و ریتم خوبی تشکیل بده؛ همینطور از تکرار صداهای
          مشابه یا ترکیب‌های سخت پرهیز کنین تا همیشه اسمش راحت و دلنشین شنیده بشه.
        </TextGenerator>

        <TitleGenerator tagType="h3">4. انتخاب اسم پسر بر اساس اسم پدر و مادر</TitleGenerator>
        <TextGenerator>
          در بعضی خانواده‌ها رسمه که اسامی فرزندان بر اساس بخش‌هایی از نام پدر یا مادر انتخاب می‌شه. این کار علاوه بر
          ایجاد پیوند خانوادگی قوی‌تر، باعث می‌شه اسم‌ها یادآور ریشه و تاریخ خانوادگی باشن. اگه دوست دارین، می‌تونین از
          حروف یا بخش‌هایی از نام خود یا همسرتون الهام بگیرین و اسمی منحصر به فرد بسازین.
        </TextGenerator>
        <div>
          <TextGenerator>اگه شما هم هنوز جنسیت فرزندتون رو نمیدونین مطالعه مقاله‌های</TextGenerator>
          <LinkGenerator href="/pregnancy-symptoms-of-having-a-boy">علائم بارداری پسر</LinkGenerator>
          <TextGenerator>و</TextGenerator>
          <LinkGenerator href="/pregnancy-symptoms-of-having-a-girl">علائم بارداری دختر</LinkGenerator>
          <TextGenerator> می‌تونن کمک کنن یه حدس کوچولو بزنین که باید بیشتر دنبال اسم پسر باشین یا دختر</TextGenerator>
        </div>

        <TitleGenerator tagType="h3">5. بررسی لیست ثبت احوال برای انتخاب اسم پسر</TitleGenerator>
        <TextGenerator>
          قبل از قطعی کردن هر اسمی حتما بررسی کنین که اون اسم در لیست اسامی مجاز ثبت احوال باشه. ممکنه برخی اسم‌های
          پسرانه جدید یا خاص به تایید بیشتری نیاز داشته باشن یا حتی ثبت نشدن‌شون باعث دردسرهای اداری بشه. پس یه بار دیگه
          حتما چک کنین که اسم انتخابی‌تون رسمی و قابل ثبت باشه. ایمپو با ابزار انتخاب اسم اینکارو براتون آسون کرده.
        </TextGenerator>
        <div>
          <TextGenerator>
            اگه همزمان دارین لیست اسم‌های پسر رو زیر و رو می‌کنین، شاید بد نباشه نگاهی هم به
          </TextGenerator>
          <LinkGenerator href="/landing/girl-name">اسم دختر </LinkGenerator>
          <TextGenerator>
            بندازین. شاید دلتون بخواد اسم‌های خواهر و برادر آینده رو از الان به صورت ست دربیارین.
          </TextGenerator>
        </div>

        <TitleGenerator tagType="h3">6. توجه به اشکال دیگر اسم</TitleGenerator>
        <TextGenerator>
          بعضی اسم‌ها وقتی کوتاه می‌شن یا تو جمع‌های دوستانه به شکل دیگه‌ای صدا زده می‌شن، ممکنه معانی ناخوشایند یا بدی
          پیدا کنن. قبل انتخاب اسم پسر، به این فکر کنین که ممکنه چه مخفف یا لقبی ازش ساخته بشه و آیا اون‌ها برای
          فرزندتون مناسب و قابل قبول هستن یا نه.
        </TextGenerator>

        <TitleGenerator tagType="h3">7.در نظر گرفتن آینده و هویت فرزند</TitleGenerator>
        <TextGenerator>
          اسم پسر شما تا آخر عمر همراهش خواهد بود، پس بهتره اسمی انتخاب کنین که در همه مراحل زندگی، از کودکی تا
          بزرگسالی، مناسب باشه. اسم‌هایی که خیلی عجیب یا فقط برای بچه‌ها جالب هستن ممکنه در آینده برای فرزندتون دردسرساز
          باشن. یک اسم پسر خوب باید خاص و قابل احترام باشه.
        </TextGenerator>
        <div>
          <TextGenerator>
            هنوز نمی‌دونی چند هفته از بارداریت گذشته یا دقیقا چه تاریخی قراره کوچولوت به دنیا بیاد؟ با کمک
          </TextGenerator>
          <LinkGenerator href="/calendarOfPregnancy">تقویم بارداری</LinkGenerator>
          <TextGenerator>
            می‌تونی مرحله به مرحله وضعیت بارداریتو دنبال کنی و راحت‌تر برای انتخاب اسم وقت بذاری.
          </TextGenerator>
        </div>

        <TitleGenerator tagType="h2">انتخاب اسم پسر بر اساس فرهنگ و قومیت</TitleGenerator>
        <TextGenerator>
          خیلی از پدر و مادرها دلشون می‌خواد اسم پسرشون، هم اصیل و هم خاص و شنیدنی باشه. اسمی که یه جورایی نشون بده بچه
          چه ریشه‌ای داره و به چه فرهنگی تعلق داره. وقتی اسم پسر با پیشینه خانوادگی و فرهنگی هماهنگ باشه، یه حس اعتماد و
          هویت به همراهش میاره؛ حسی که از همون اول، در دل اطرافیان جا باز می‌کنه.
        </TextGenerator>
        <TextGenerator>
          اگه انتخاب اسم پسر یه‌جورایی بی‌ربط به فرهنگ خانواده باشه، ممکنه بعدها یه احساس ناهماهنگی یا غریبی ایجاد کنه؛
          مثلا یه خانواده فارس یا عرب، اگه یه اسم صرفا مد روز و غربی رو انتخاب کنن که هیچ پیوندی با زبان و سنتشون نداره،
          ممکنه خودشون یا فرزندشون بعدها حس کنن یه چیزی وصله ناجوره.
        </TextGenerator>
        <TextGenerator>
          از طرف دیگه، اسم‌هایی که هم‌راستا با ریشه قومی یا زبانی خانواده‌ان مثلا اسم‌های ترکی، کردی، بلوچی، لری، عربی
          یا فارسی اصیل علاوه بر اینکه زیبا هستن، یه جور احترام به ریشه‌ها و پیوند با گذشته هم به حساب میان. همینطور این
          اسم‌های پسرانه معمولا برای پدربزرگ‌ها و مادربزرگ‌ها هم آشناتر و دوست‌داشتنی‌ترن.
        </TextGenerator>
        <TextGenerator>
          پس اگه دنبال یه اسم پسر خاص و تک و خوش‌معنا هستی که هم با فرهنگت جور باشه، هم به دل بشینه، حتما دسته‌بندی‌های
          مختلف رو نگاه کن. شاید دقیقا همون اسمی که دنبالش بودی، بینشون باشه:
        </TextGenerator>

        <TitleGenerator tagType="h2">اسم پسر ایرانی</TitleGenerator>
        <TextGenerator className="mb-2">
          اگه دلت می‌خواد اسم پسرت یه حس اصالت و قدرت بده، نام‌های پسرانه فارسی دقیقا همون چیزی هستن که دنبالش می‌گردی.
          خیلی از این اسم‌های پسرانه از دل شاهنامه، تاریخ ایران یا طبیعت و زبان فارسی بیرون اومدن و پر از معنا و شخصیتن.
          در لیست بهترین نام‌های پسرانه سراغ اسم‌هایی رفتیم که هم شنیدنی‌ان، هم متفاوت و هم حس ایرانی بودن رو دارن:
        </TextGenerator>

        <ItemGenerator>آرین: نجیب </ItemGenerator>
        <ItemGenerator>هومان: نیک اندیش</ItemGenerator>
        <ItemGenerator>برسام: آتش بزرگ</ItemGenerator>
        <ItemGenerator>رهام: پرنده شکست ناپذیر</ItemGenerator>
        <ItemGenerator>رادمان: باسخاوت</ItemGenerator>
        <ItemGenerator> سامیار: ثروتمند</ItemGenerator>
        <ItemGenerator>آراد: بخشنده</ItemGenerator>
        <ItemGenerator>آرتین: پاک و مقدس</ItemGenerator>
        <ItemGenerator>اهورا: هستی بخش</ItemGenerator>
        <ItemGenerator>ویهان: نیکان</ItemGenerator>

        <TitleGenerator tagType="h2">اسم پسر کردی</TitleGenerator>
        <TextGenerator className="mb-2">
          اگه دنبال یه اسم پسر جدید و امروزی 1404 هستی که ریشه در فرهنگ و زبان کردی داشته باشه، این لیست دقیقا همونه که
          لازم داری. خیلی از این نام‌های پسرانه الهام‌گرفته از طبیعت، قدرت، شجاعت یا ریشه‌های تاریخی و اسطوره‌ای کردیه و
          هویت خاصی به اسم بچه می‌دن. در ادامه، چندتا از اسم‌های پسرانه کردی رو که هم خوش‌آوا هستن، هم پرمعنا و متفاوت
          معرفی می‌کنیم:
        </TextGenerator>
        <ItemGenerator>دیاکو: نام نخستین پادشاه ایران</ItemGenerator>
        <ItemGenerator>نیهاد: سرشت</ItemGenerator>
        <ItemGenerator>هیرا: وسیع</ItemGenerator>
        <ItemGenerator>وانیار: باسواد</ItemGenerator>
        <ItemGenerator>آریوان: نگهبان آتش</ItemGenerator>
        <ItemGenerator>هیمن:موقر</ItemGenerator>
        <ItemGenerator>دانیار: دارنده دانش</ItemGenerator>
        <ItemGenerator>برزان: شکوه و جلال</ItemGenerator>
        <ItemGenerator>دادیار: حامی قانون </ItemGenerator>
        <ItemGenerator>رادمین: بخشنده</ItemGenerator>

        <TitleGenerator tagType="h2">اسم پسرانه ترکی</TitleGenerator>
        <TextGenerator className="mb-2">
          اگه اصالتا ترک هستین یا دلتون با زبان ترکی و آوای خوش اسم‌های پسرانه ترکی گره خورده، این لیست از نام‌های
          پسرانه مخصوص شماست. اسامی ترکی برای پسرها از طبیعت و عناصر گرفته تا مفاهیمی مثل شجاعت و بزرگی معمولا پرقدرت،
          خوش‌ریتم و با معناهایی زیبا هستن؛ در ادامه، چندتا از اسم‌های پسر خاص و تک ترکی رو با هم مرور می‌کنیم:
        </TextGenerator>
        <ItemGenerator>آیهان: پادشاه ماه</ItemGenerator>
        <ItemGenerator>آراز: نام قهرمان طایفه آس</ItemGenerator>
        <ItemGenerator>آرکان: سرشت پاک</ItemGenerator>
        <ItemGenerator>نویان: امیر و سردار</ItemGenerator>
        <ItemGenerator>علیهان: هدیه خدا</ItemGenerator>
        <ItemGenerator>ایلحان: خان بزرگ ایل</ItemGenerator>
        <ItemGenerator>آیراد: ماه جوانمرد</ItemGenerator>
        <ItemGenerator>آرهان: پادشاه پاک و درستکار</ItemGenerator>
        <ItemGenerator>آرات: دلیر و جسور</ItemGenerator>
        <ItemGenerator>آتای: معروف</ItemGenerator>

        <TitleGenerator tagType="h2">اسم پسر مذهبی جدید و شیک</TitleGenerator>
        <TextGenerator className="mb-2">
          وقتی دنبال اسمی هستی که در عین حال که ریشه مذهبی داره خاص و خوش‌آوا هم هست، این لیست می‌تونه کلی الهام‌بخش
          باشه. خیلی‌ها دوست دارن اسم پسرشون معنای عمیق، الهام‌گرفته از ایمان و پاکی داشته باشه، اما نه اون‌قدر تکراری
          که در هر جمعی چند نفر دیگه هم همنامش باشن. در این بخش، چند تا از اسم‌های پسرانه مذهبی رو آوردیم که هم اصالت
          دارن، هم شنیدنشون حس خوب می‌ده و هم به‌خوبی با فضای امروزی هماهنگن:
        </TextGenerator>
        <ItemGenerator>ادیب: فرهیخته</ItemGenerator>
        <ItemGenerator>زین: زینت و زیبایی</ItemGenerator>
        <ItemGenerator>حیان: زندگی‌بخش</ItemGenerator>
        <ItemGenerator>ساجد: سجده‌کننده</ItemGenerator>
        <ItemGenerator>یاسین: یکی از سوره‌های قرآن</ItemGenerator>
        <ItemGenerator>ارمیا: بزرگ داشته شده</ItemGenerator>
        <ItemGenerator>مهدیار: محافظ سرزمین</ItemGenerator>
        <ItemGenerator>ایلیا: نام یکی از پیامبران</ItemGenerator>
        <ItemGenerator> مسیحا: لقب حضرت عیسی(ع)</ItemGenerator>
        <ItemGenerator>علیسان: مانند علی(ع)</ItemGenerator>

        <TitleGenerator tagType="h2">اسم پسر خاص و تک بین‌المللی</TitleGenerator>
        <TextGenerator className="mb-1">
          خیلی از پدر و مادرها دنبال اسمی هستن که هم خاص باشه و هم تو هر کشوری، هر زبانی و هر فرهنگی، خوش‌آوا و قابل
          پذیرش باقی بمونه. اسم‌های بین‌المللی معمولاً کوتاه، خوش‌تلفظ و بدون حروف سخت یا ترکیبات پیچیده‌ان. خوبی این
          اسم‌ها اینه که نه فقط تو ایران، بلکه خارج از کشور هم به‌راحتی قابل استفاده‌ان و کمتر کسی اسم فرزندتون رو
          اشتباه تلفظ می‌کنه.
        </TextGenerator>
        <TextGenerator className="mb-2">
          تو این لیست، چندتا اسم پسر جدید و باکلاس بین‌المللی معرفی کردیم که هم خاص‌ان، هم معناهای زیبا و قدرتمندی دارن:
        </TextGenerator>
        <ItemGenerator>ایلیو(Elio): خورشید؛ ریشه ایتالیایی و اسپانیایی</ItemGenerator>
        <ItemGenerator>کای(Kai): در زبان هاوایی یعنی «دریا»، در ژاپنی یعنی «پیروزی»</ItemGenerator>
        <ItemGenerator>مایلو(): مهربان و دوست‌داشتنی؛ ریشه آلمانی/اسلاوی</ItemGenerator>
        <ItemGenerator>انزو(Enzo): فرمانروا؛ ایتالیایی</ItemGenerator>
        <ItemGenerator>سورن(Soren): سختگیر؛ ریشه اسکاندیناویایی</ItemGenerator>
        <ItemGenerator>رایان(Rayan): دروازه بهشت؛ ریشه‌ای بین عربی و انگلیسی</ItemGenerator>
        <ItemGenerator>لئو(Leo): «شیر»، نماد شجاعت؛ لاتین</ItemGenerator>
        <ItemGenerator>آریس(Aris): خدای جنگ در اسطوره‌ها؛ یونانی</ItemGenerator>
        <ItemGenerator>ازیو(Ezio): عقاب ؛ ایتالیایی</ItemGenerator>
        <ItemGenerator>الیام(Eliam): قوم خدا؛ عبری</ItemGenerator>

        <TitleGenerator tagType="h2">اسم عربی پسرانه</TitleGenerator>
        <TextGenerator className="mb-2">
          خیلی از پدر و مادرها دنبال قشنگ‌ترین اسم‌های پسرانه هستن که ریشه اصیل عربی داره؛ نه فقط به خاطر معنای زیبای
          این اسامی، بلکه چون با اعتقادات، فرهنگ یا زبان خانوادگی‌شون هماهنگه. اسم‌های پسرانه عربی معمولا بار معنوی
          بالایی دارن، تلفظ‌شون ساده‌ست و خیلی‌هاشون در قرآن یا احادیث هم اومدن. در این بخش، اسم پسر جدید و شیک و
          خوش‌معنی عربی رو آوردیم که می‌تونن یه انتخاب خاص و به‌یادموندنی باشن:
        </TextGenerator>
        <ItemGenerator>حمزه: شیر نر و دلیر</ItemGenerator>
        <ItemGenerator>ایهاب: بخشش</ItemGenerator>
        <ItemGenerator>جود: سخاوت و بخشندگی</ItemGenerator>
        <ItemGenerator>نعمان: گل سرخ</ItemGenerator>
        <ItemGenerator>زید: به معنی فزونی</ItemGenerator>
        <ItemGenerator>قیس: به معنی شدتِ عشق یا سختی</ItemGenerator>
        <ItemGenerator>عامر: کسی که جایی رو زنده و پررونق نگه می‌داره</ItemGenerator>
        <ItemGenerator>معاذ: کسی که در امان خدا است</ItemGenerator>
        <ItemGenerator>مالک: دارنده اختیار</ItemGenerator>
        <ItemGenerator>ایاس: هدیه</ItemGenerator>

        <TitleGenerator tagType="h2">سخن پایانی</TitleGenerator>
        <TextGenerator>
          انتخاب از بین بهترین نام‌های پسرانه، یکی از مهم‌ترین و دوست‌داشتنی‌ترین لحظات زندگی هر خانواده است؛ اسمی که
          قرار نیست فقط یک کلمه ساده باشه، بلکه هویتی است که تا همیشه همراه فرزندتون می‌مونه. اگه دنبال اسم پسر کمیاب و
          خاص، با معنی و متناسب با فرهنگ و سلیقه خودتون هستین، ابزار انتخاب اسم پسر اپلیکیشن ایمپو بهترین همراه شماست.
          با امکانات پیشرفته، فیلترهای دقیق و لیست‌های متنوع، به راحتی می‌تونید نام‌های پسرانه رو پیدا کنین که نه تنها
          خاص و بی‌نظیر هستن، بلکه حس تعلق و افتخار رو هم به خانواده‌تون هدیه بده.
        </TextGenerator>
      </div>

      <div className="w-full flex items-center justify-center gap-2 pt-6" onClick={() => setIsOpen(!isOpen)}>
        <CustomTypography fontSize="Title_Small" color={'PrimaryMan_PrimaryMan'}>
          خواندن اطلاعات بیشتر
        </CustomTypography>

        <ArrowIcon
          className="w-4 duration-100"
          style={{ fill: COLORS_LIST.PrimaryMan_PrimaryMan, transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
        />
      </div>
    </div>
  );
};

export default Description;

const TitleGenerator = (props: { children: string; tagType: 'h2' | 'h3' }) => {
  return (
    <CustomTypography tagType={props.tagType} fontSize="Title_Small" className="mt-3 mb-2">
      {props.children}
    </CustomTypography>
  );
};

const TextGenerator = (props: { children: string; className?: string }) => {
  return <CustomTypography className={`inline ${props.className}`}>{props.children}</CustomTypography>;
};

const ItemGenerator = (props: { children: string }) => {
  return (
    <div className="flex items-start gap-4 mr-6 pb-1">
      <span
        style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
        className="w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2 rounded-full"
      />
      <CustomTypography className="inline">{props.children}</CustomTypography>
    </div>
  );
};

const LinkGenerator = (props: { children: string; href: string }) => {
  return (
    <CustomLink href={props.href} className="inline">
      <CustomTypography className="px-1 inline" color={'Primary_Primary'}>
        {props.children}
      </CustomTypography>
    </CustomLink>
  );
};
