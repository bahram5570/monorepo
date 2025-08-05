import CustomTypography from '@components/ui/CustomTypography';

const NameSelectionHeadingContent = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
      <CustomTypography
        tagType="h1"
        fontSize="Headline_Medium"
        color={'Neutral_OnBackground'}
        className="py-2 lg:pt-2 lg:pb-1"
      >
        انتخاب اسم دختر؛ آغاز یک قصه نیکو
      </CustomTypography>

      <CustomTypography
        tagType="span"
        fontSize="Body_Large"
        color={'Surface_InverseSurface'}
        className="text-center lg:text-right"
      >
        انتخاب اسم برای فرزند، یکی از زیباترین و در عین حال حساس‌ترین تصمیم‌های شما به‌عنوان والدینه. وقتی صحبت از «اسم
        دختر» می‌شه، لطافت، زیبایی و اصالت همه با هم اهمیت پیدا می‌کنن. اسمی که انتخاب می‌کنین، نه فقط هویت دختر
        کوچولوتون رو شکل می‌ده، بلکه پیوندی عمیق با فرهنگ، تاریخ و ارزش‌های خانوادگی شما برقرار می‌کنه.
      </CustomTypography>
      <CustomTypography
        tagType="span"
        fontSize="Body_Large"
        color={'Surface_InverseSurface'}
        className="text-center lg:text-right"
      >
        اگه ابزار مناسب کنار شما باشه، این مسیر ساده‌تر، لذت‌بخش‌تر و مطمئن‌تر می‌شه. حالا که به‌تازگی خبر خوش بارداری
        رو شنیدید و با شوق دنبال اسم مناسب می‌گردید، ما کنارتون هستیم. در این راهنمای جامع، با نکات کاربردی و الهام‌بخش
        همراه شما خواهیم بود تا بتونین از بین اسامی جدید، خاص و هماهنگ با فرهنگ و سلیقه‌تون، بهترین و نیکوترین اسم دختر
        رو انتخاب کنین.
      </CustomTypography>
    </div>
  );
};

export default NameSelectionHeadingContent;
