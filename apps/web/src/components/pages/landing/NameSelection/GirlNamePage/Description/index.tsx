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
    'اسم دختری که انتخاب می‌کنین باید روان و خوش‌آهنگ باشه؛ چون تلفظ راحت باعث می‌شه اسم تحریف یا تغییر نکنه و همیشه درست خونده بشه.';

  return (
    <div className="w-full rounded-2xl p-6" style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}>
      <CustomTypography fontSize="Headline_Medium" color={'Neutral_OnBackground'} tagType="h2" className="pb-7">
        در انتخاب اسم دختر به چه نکاتی باید توجه کنیم؟
      </CustomTypography>

      <CustomTypography fontSize="Body_Large" color={'Neutral_OnBackground'} className="pb-3">
        وقتی به لیست بلند بالای اسم دخترانه جدید و شیک نگاه می‌کنین، طبیعی هست که کمی گیج بشید. در انتخاب اسم دخترانه
        باید این موارد رو در نظر بگیرید:
      </CustomTypography>

      <TitleGenerator tagType="h3">1. زیبایی و خوش‌آوایی نام دختر</TitleGenerator>
      <TextGenerator>{isOpen ? firstLineScript : textShorter(firstLineScript, 120)}</TextGenerator>

      <div
        ref={ref}
        style={{ maxHeight: isOpen ? maxHeight : 0 }}
        className="w-full h-fit flex flex-col duration-500 overflow-hidden"
      >
        <TitleGenerator tagType="h3">2. توجه به معنی و ریشه اسم دختر</TitleGenerator>
        <TextGenerator>
          اسم دختر خاص و تک باید معنی قشنگ، مثبت و دلنشین داشته باشه. دختر کوچولوتون قراره تا همیشه بار معنایی این اسم
          رو با خودش داشته باشه؛ پس بهتره اسم، حس افتخار و آرامش بیاره. علاوه بر این، اسم‌ها باید با پیشینه فرهنگی
          خانواده هم هماهنگ باشن.
        </TextGenerator>
        <TextGenerator>
          بااینکه اسامی بین‌المللی و مدرن خیلی طرفدار دارن، اما خیلی از خانواده‌ها دوست دارن اسمی انتخاب کنن که بازتاب
          هویت قومی، ملی یا مذهبی‌شون باشه. انتخاب اسم فارسی، کردی، ترکی، عربی یا قرآنی با توجه به فرهنگ خانواده، به
          دخترتون کمک می‌کنه حس تعلق بیشتری داشته باشه.
        </TextGenerator>

        <TitleGenerator tagType="h3">3. هماهنگی اسم دختر با نام خانوادگی</TitleGenerator>
        <TextGenerator>
          گاهی یه اسم به تنهایی قشنگه ولی وقتی با نام خانوادگی ترکیب می‌شه، خوب نمی‌شه یا تلفظش سخت می‌شه. بهتره اسمی
          انتخاب کنین که با اول یا آخر نام خانوادگی تضاد یا تکرار نداشته باشه و وزن و آهنگش هم با نام خانوادگی هماهنگ
          باشه.
        </TextGenerator>

        <TitleGenerator tagType="h3">4. توافق پدر و مادر برای انتخاب اسم دختر</TitleGenerator>
        <TextGenerator>
          انتخاب اسم باید با مشورت و نظر هر دو والدین باشه. گاهی ممکنه نظرها متفاوت باشه؛ تو این شرایط بهتره گزینه‌ها رو
          بررسی کنین و درباره معانی و دلایل انتخاب هر اسم حرف بزنین تا به تصمیم مشترک و رضایت‌بخش برسین.
        </TextGenerator>
        <div>
          <TextGenerator>
            بعضی خانواده‌ها بعد از مطمئن شدن از جنسیت جنین، اسم انتخاب می‌کنن. اگه هنوز نمی‌دونید دختر دارید یا پسر،
            نگاهی به مقاله
          </TextGenerator>
          <LinkGenerator href="/pregnancy-symptoms-of-having-a-girl">علائم بارداری دختر</LinkGenerator>
          <TextGenerator>بندازید؛ و اگه علائمی دارین که شمارو مشکوک به داشتن فرزند پسر کرده، مقاله</TextGenerator>
          <LinkGenerator href="/pregnancy-symptoms-of-having-a-boy">علائم بارداری پسر</LinkGenerator>
          <TextGenerator>هم می‌تونه براتون جالب باشه.</TextGenerator>
        </div>

        <TitleGenerator tagType="h3">5. توجه به محبوبیت یا خاص بودن اسم دختر</TitleGenerator>
        <TextGenerator>
          برخی دوست دارن اسم دختر خاص و تک انتخاب کنن و بعضی‌ها دنبال اسم‌های محبوب و رایج‌تر هستن. اسم دخترانه کمتر
          شنیده شده، فرزند شما رو بین دوست‌ها و آشناها متفاوت می‌کنه ولی باید مواظب باشین که اسم خیلی عجیب یا سخت نباشه.
        </TextGenerator>

        <TitleGenerator tagType="h3">6. بررسی لیست ثبت احوال برای انتخاب اسم دختر</TitleGenerator>
        <TextGenerator>
          قبل از نهایی کردن اسم حتما بررسی کنین که آیا این اسم تو لیست اسامی مجاز ثبت احوال هست یا نه. ممکنه بعضی
          اسم‌های جدید یا خاص هنوز تأیید نشده باشن یا نیاز به مجوز داشته باشن. ابزار انتخاب اسم دختر اپلیکیشن ایمپو
          حواسش به این نکته بوده و این کارو برات آسون کرده.
        </TextGenerator>

        <TitleGenerator tagType="h3">7. پیش‌بینی مخفف‌ها و لقب‌ها</TitleGenerator>
        <TextGenerator>
          برخی اسم‌ها وقتی کوتاه می‌شن یا تو جمع‌های دوستانه به شکل دیگه‌ای صدا زده می‌شن، ممکنه معنای ناخوشایند یا بدی
          پیدا کنن. پس قبل انتخاب اسم دختر جدید و باکلاس، به این فکر کنین که ممکنه چه مخفف یا لقبی داشته باشه.
        </TextGenerator>

        <TitleGenerator tagType="h3">8. ملاحظات مذهبی یا اعتقادی</TitleGenerator>
        <TextGenerator>
          اگر خانواده مذهبی هستین یا دوست دارین اسم دخترانه با بار معنوی انتخاب کنین، اسامی مرتبط با پیامبران، امامان یا
          اسامی قرآنی گزینه‌های خیلی خوبی هستن
        </TextGenerator>

        <TitleGenerator tagType="h3">9. توجه به هویت آینده کودک</TitleGenerator>
        <TextGenerator>
          اسم فقط برای دوران بچگی نیست و تا آخر عمر همراه اون شخص هست. پس در انتخاب اسم باید آینده‌نگر باشین و از انتخاب
          اسم‌هایی که فقط تو بچگی خوشگل یا بامزه هستن، خودداری کنین.
        </TextGenerator>
        <div>
          <TextGenerator>
            بسیاری از مادرهای باردار علاوه بر هیجان انتخاب اسم، دوست دارن بدونن الان دقیقا در کدوم مرحله از
          </TextGenerator>
          <LinkGenerator href="/pregnancy">بارداری</LinkGenerator>
          <TextGenerator>
            هستن و چه تغییراتی پیش رو دارن. اگه هنوز مطمئن نیستید زمان دقیق زایمان یا مرحله بارداریتون چیه،
          </TextGenerator>
          <LinkGenerator href="/calendarOfPregnancy">تقویم بارداری</LinkGenerator>
          <TextGenerator>ایمپو می‌تونه شروع خیلی خوبی برای برنامه‌ریزی دقیق‌تر باشه.</TextGenerator>
        </div>

        <TitleGenerator tagType="h2">هماهنگی اسم دختر با فرهنگ و قومیت</TitleGenerator>
        <TextGenerator>
          خیلی از خانواده‌ها ترجیح می‌دن برای دختر کوچولوشون اسمی انتخاب کنن که هم ریشه تو فرهنگ خودشون داشته باشه و هم
          امروزی و شیک به حساب بیاد. واقعا هم اسم بچه اولین چیزیه که بقیه ازش می‌شنون و تا حد زیادی روی برداشت اولیه اثر
          می‌ذاره. وقتی اسم بچه با فرهنگ خانوادگی جور باشه، از همون اول یه حس قشنگ تعلق و ریشه‌دار بودن بهش می‌ده.
        </TextGenerator>
        <TextGenerator>
          انتخاب اسم دخترانه شیک و در عین حال هماهنگ با قومیت و فرهنگ خانوادگی، باعث می‌شه نه بچه و نه اطرافیان، احساس
          بیگانگی نداشته باشن. مثلا تصور کنین خانواده‌ای کرد باشن ولی یه اسم کاملا غربی یا عربی برای دخترشون بذارن که
          هیچ ربطی به زبان یا فرهنگشون نداره؛ ممکنه بعدا یه حس دوری یا عدم ارتباط فرهنگی برای بچه یا حتی خانواده پیش
          بیاد.
        </TextGenerator>
        <TextGenerator>
          وقتی اسم دختر جدید و شیک و متناسب با قومیت انتخاب می‌شه، خانواده یه جورایی بخشی از سنت و زبان و تاریخ خودش رو
          زنده نگه می‌داره. از طرفی، این مدل اسم‌ها معمولا مورد تأیید و علاقه نسل‌های قبلی خانواده هم هستن؛ چون براشون
          آشنا و معنادارن. بر همین اساس، خیلی‌ها سراغ یکی از این دسته‌بندی‌های محبوب می‌رن:
        </TextGenerator>

        <TitleGenerator tagType="h2">اسم دختر قرآنی شیک و اسلامی</TitleGenerator>
        <TextGenerator>
          خیلی از خانواده‌ها دنبال زیباترین و باکلاس‌ترین اسم دختر هستن که معنی عمیق و معنوی هم پشتش باشه. خب، چی بهتر
          از اسم‌های قرآنی؟ نیکوترین اسم دختر که در قرآن اومدن یا ریشه اسلامی دارن، معمولا پر از حس خوب، پاکی و ارزش‌های
          موندگارن. انتخاب یه اسم قرآنی یعنی هم به اصالت و فرهنگ اسلامی پایبند موندین، هم یه اسم شیک و متفاوت برای دختر
          کوچولوتون انتخاب کردین. در ادامه چندتا اسم دخترانه قرآنی‌ که هم زیبان و هم پرمفهوم رو معرفی می‌کنیم:
        </TextGenerator>
        <ItemGenerator>تسنیم: اسم یه چشمه بهشتیه که در قرآن ازش اسم برده شده(سوره مطففین، آیه ۲۷)</ItemGenerator>
        <ItemGenerator>سلوی: همون پرنده بهشتی که غذای قوم بنی‌اسرائیل بود(سوره بقره، آیه ۵۷)</ItemGenerator>
        <ItemGenerator>کوثر: خیر و برکت زیاد</ItemGenerator>
        <ItemGenerator>ریحانه: گل خوشبو و لطیف</ItemGenerator>
        <ItemGenerator>بسمة: لبخند و شادی</ItemGenerator>
        <ItemGenerator>نورین: دو نور؛ ترکیبی از درخشش و روشنایی</ItemGenerator>
        <ItemGenerator>یسنا: یعنی ستایش و پرستش. از سوره «یس» الهام گرفته شده و حس خاصی داره</ItemGenerator>
        <ItemGenerator>هدی: راهنمایی و هدایت از سمت خدا</ItemGenerator>
        <ItemGenerator>سُهى: اسم یه ستاره</ItemGenerator>
        <ItemGenerator>حنان: مهربونی و رحمت الهی</ItemGenerator>

        <TitleGenerator tagType="h2">اسم دختر ایرانی و فارسی</TitleGenerator>
        <TextGenerator>
          اگه دلتون می‌خواد اسم دختر شما یه جورایی ریشه‌دار و اصیل باشه، اسامی ایرانی و فارسی بهترین انتخابن. این لیست
          اسم دخترانه جدید نه‌تنها خوش‌آهنگ و دلنشین‌ان، بلکه یه تکه از تاریخ، شعر و فرهنگمون رو با خودشون دارن. در
          ادامه، چندتا اسم دخترانه جدید و شیک که پر از حس خوب و دارای ریشه فارسی هستن و از بین لیست 50 اسم برتر دختر،
          گلچین شده‌ها رو معرفی می‌کنیم:
        </TextGenerator>
        <ItemGenerator>آترین: پاک‌ترین</ItemGenerator>
        <ItemGenerator>نیکا: نیکی‌کننده، مهربون</ItemGenerator>
        <ItemGenerator>روناک: روشن و درخشنده</ItemGenerator>
        <ItemGenerator>آوا: صدا، نغمه</ItemGenerator>
        <ItemGenerator>هلیا: خورشیدگون</ItemGenerator>
        <ItemGenerator>پریا: جمع پری، مثل فرشته‌ها</ItemGenerator>
        <ItemGenerator>رُزانا: روشنایی روز</ItemGenerator>
        <ItemGenerator>دلارام: آرامش‌دهنده دل</ItemGenerator>
        <ItemGenerator>ساینا: روشنایی، درخشندگی</ItemGenerator>
        <ItemGenerator>آرمیتا: آرامش‌بخش</ItemGenerator>
        <TextGenerator>
          با این اسم‌ها هم اصالت داری، هم یه انتخاب متفاوت و شیرین برای کوچولوت انجام می‌دی.
        </TextGenerator>

        <TitleGenerator tagType="h2">اسم دختر کردی</TitleGenerator>
        <TextGenerator>
          اگه دنبال یه اسم دختر امروزی هستی که ریشه در فرهنگ کردی داشته باشه، این لیست برات ساخته شده. از جمله اسم‌هایی
          که با طبیعت، عشق، زیبایی و هویت کردی گره خوردن، میشه موارد زیر رو معرفی کرد:
        </TextGenerator>
        <ItemGenerator>آوین: عشق، یکی از محبوب‌ترین اسامی دخترانه کردی</ItemGenerator>
        <ItemGenerator>ژیار: زندگی</ItemGenerator>
        <ItemGenerator>نیان: پاک و خالص</ItemGenerator>
        <ItemGenerator>لارین: مکانی آرام</ItemGenerator>
        <ItemGenerator>دلین: دلبسته و عاشق</ItemGenerator>
        <ItemGenerator>ژیلا: شبنم روی گل‌ها</ItemGenerator>
        <ItemGenerator>هانا: امید و روشنایی. یکی از اسم‌های محبوب کردی که جهانی هم هست.</ItemGenerator>
        <ItemGenerator>آوینا: ترکیبی از "آو"(آب) و عشق؛ معنی‌اش میشه عشق روان یا جاری.</ItemGenerator>
        <ItemGenerator>ویانا: آرزو</ItemGenerator>
        <ItemGenerator>روناک: روشنایی، نور</ItemGenerator>

        <TitleGenerator tagType="h2">اسم دخترانه ترکی</TitleGenerator>
        <TextGenerator>
          اگه اصالتا ترک و ترک‌زبان هستین یا حتی فقط عاشق آواهای نرم و آهنگین اسم‌های ترکی هستین، این دسته از اسم
          دخترانه جدید می‌تونن حسابی دلتون رو ببرن! اسامی ترکی معمولا ملایم، موزون و پر از معناهای قشنگ، از طبیعت گرفته
          تا احساسات و ویژگی‌های لطیف انسانی هستن. برخی از اسم دختر جدید و شیک ترکی رو بررسی می‌کنیم:
        </TextGenerator>
        <ItemGenerator>آیلا(Ayla): هاله نور دور ماه</ItemGenerator>
        <ItemGenerator>دنیز(Deniz): به‌معنای دریا</ItemGenerator>
        <ItemGenerator>ایلای(İlay): ترکیب "ایل" به‌معنای خاندان و "آی" به‌معنای ماه. یعنی ماه خاندان</ItemGenerator>
        <ItemGenerator>آسینا(Asina): آشنا و دل‌نشین</ItemGenerator>
        <ItemGenerator>یارا(Yara): زیبا، دوست‌داشتنی و ظریف</ItemGenerator>
        <ItemGenerator>سونای(Sunay): زیبایی ماه در هنگام طلوع خورشید</ItemGenerator>
        <ItemGenerator>ملیس(Melis): گیاهی خوش‌بو و آرام‌بخش</ItemGenerator>
        <ItemGenerator>آیسو(Aysu): ترکیبی از ماه و آب؛ یعنی زلال مثل آب، روشن مثل ماه</ItemGenerator>
        <ItemGenerator>لارا (Lara): معنایی لطیف و جهانی داره؛ در ترکی رایجه و به‌معنای ملکه در افسانه‌ها</ItemGenerator>
        <ItemGenerator>
          آی‌نور(Aynur): ترکیب "آی" به معنای ماه و "نور". به‌معنای «روشنایی ماه» یا «دختری با چهره‌ای چون ماه». هم
          لطیفه، هم اصالت داره و توی فرهنگ ترکی خیلی محبوبه
        </ItemGenerator>

        <TitleGenerator tagType="h2">اسم دختر پیامبران و امامان</TitleGenerator>
        <TextGenerator>
          اگه دنبال اسمی هستی که هم زیبا و دلنشین باشه، هم بار معنوی و احترام خاصی داشته باشه، اسم‌هایی که از زندگی
          پیامبران، امامان و خانواده‌اشون گرفته شده، انتخاب‌های خیلی خوبی هستن. در ادامه چند تا نام دخترانه خوش‌معنا رو
          با ریشه و مفهومشون می‌تونی ببینی:
        </TextGenerator>
        <ItemGenerator>
          فاطمه: نام دختر پیامبر اسلام(ص)، زنی که از بدی‌ها جدا شده؛ یکی از پرافتخارترین اسامی در فرهنگ شیعه
        </ItemGenerator>
        <ItemGenerator>زینب: دختر امام علی(ع) و حضرت فاطمه(س)، نماد صبر و شجاعت</ItemGenerator>
        <ItemGenerator>رقیه: دختر خردسال امام حسین(ع)، سمبل معصومیت و مظلومیت</ItemGenerator>
        <ItemGenerator>معصومه: لقب حضرت فاطمه معصومه(س)، خواهر امام رضا(ع)، به‌معنای پاک و بی‌گناه</ItemGenerator>
        <ItemGenerator>نجمه: مادر امام رضا(ع)، به‌معنای ستاره</ItemGenerator>
        <ItemGenerator>مریم: مادر حضرت عیسی(ع)، از اسامی مقدس آسمانی؛ به‌معنای پاکدامن و عبادت‌پیشه</ItemGenerator>
        <ItemGenerator>فائزه: دختر امام علی(ع)، به معنی موفق و پیروز</ItemGenerator>
        <ItemGenerator>ثریا: نام یکی از همسران پیامبر(ص)، به معنی خوشه ستاره‌ها</ItemGenerator>
        <ItemGenerator>بثینه: نام یکی از زنان پیامبر(ص)، به معنی نرمی و لطافت</ItemGenerator>
        <ItemGenerator>سلمه: همسر پیامبر، یعنی سلامتی و آرامش</ItemGenerator>

        <TitleGenerator tagType="h2">اسم دختر عربی شیک و جدید</TitleGenerator>
        <TextGenerator>
          وقتی دنبال یه اسم دخترانه عربی می‌گردید که هم شیک و هم جدید باشه، انتخاب اسم دختر خاص و تک اهمیت زیادی داره.
          در این بخش چند اسم دخترانه جدید، زیبا، با معنی قشنگ و ریشه عربی براتون آوردیم که مطمئنا دل شما رو هم می‌بره:
        </TextGenerator>
        <ItemGenerator>ریما: آهو یا گوزن سفید</ItemGenerator>
        <ItemGenerator>لُجَین: نقره‌ ناب</ItemGenerator>
        <ItemGenerator>تیما: دلداده و عاشق</ItemGenerator>
        <ItemGenerator>ساریا: به معنای نسیم شبانه یا کسی که شب‌هنگام سفر می‌کنه</ItemGenerator>
        <ItemGenerator>رِناد: گیاهی معطر که در بهشت روییده</ItemGenerator>
        <ItemGenerator>سَنا: درخشندگی و روشنایی</ItemGenerator>
        <ItemGenerator>سدنا: سجده‌کننده بر خانه خدا. نام دخترانه جدید و معنوی</ItemGenerator>
        <ItemGenerator>رمیصا: نام ستاره‌ای پر نور و درخشان. اسم دختر خاص و تک</ItemGenerator>
        <ItemGenerator>ثمین: گران‌بها</ItemGenerator>
        <ItemGenerator>حسیبا: محترم و باشخصیت</ItemGenerator>

        <TitleGenerator tagType="h2">سخن پایانی</TitleGenerator>
        <TextGenerator>
          انتخاب نیکوترین اسم دختر، یک سفر شیرین و پر از احساسه که پیوندی عمیق بین شما و فرزندتون می‌سازه. امیدوارم این
          راهنما و لیست اسامی، کمک کرده باشه تا اسمی پیدا کنی که علاوه بر زیبایی و معنا به دل شما هم نشسته باشه. یادت
          باشه هر اسمی که انتخاب می‌کنی، نمایانگر عشق، امید و آینده‌ای روشن برای کوچولوت خواهد بود؛ پس با قلبی آرام و
          دلی پر از عشق، بهترین اسم رو انتخاب کن. فراموش نکن، این تازه شروع یه داستان زیباست. در تمام مسیر، از ابتدای
          بارداری تا در آغوش‌گرفتن فرزندت، ایمپو همراه توست.
        </TextGenerator>
      </div>

      <div className="w-full flex items-center justify-center gap-2 pt-6" onClick={() => setIsOpen(!isOpen)}>
        <CustomTypography fontSize="Title_Small" color={'Primary_Primary'}>
          خواندن اطلاعات بیشتر
        </CustomTypography>

        <ArrowIcon
          className="w-4 duration-100"
          style={{ fill: COLORS_LIST.Primary_Primary, transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
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

const TextGenerator = (props: { children: string }) => {
  return <CustomTypography className="inline">{props.children}</CustomTypography>;
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
