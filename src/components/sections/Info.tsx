import tw from 'tailwind-styled-components';
import CardContainer from '../card/CardContainer';
import TextSmallCard from '../card/TextSmallCard';

const TextContainer = tw.div`
  flex justify-start flex-wrap
`;

function Info() {
  const title = `من کی هستم ؟`;

  return (
    <CardContainer title={title}>
      <p className="mb-3">
        <span className="text-blue-500">علیرضا هستم پسری کنجکاو و پرتالش.</span>
        <br />
        همیشه دوست داشتم چیزی رو خلق کنم و بهش جان بدم، وقتی با برنامه نویسی
        آشنا شدم تونستم به این خواسته برسم.
        <br />
        کم کم فهمیدم برنامه نویسی همون چیزیه که باید بقیه عمرمو صرفش کنم، من هر
        روز با عشق چیزهای جدید یاد میگیرم و قصد دارم به باالترین سطح در این حوضه
        برسم.
      </p>

      <TextContainer>
        <TextSmallCard title="وضعیت تحصیل" text="در حال تحصیل" />

        <TextSmallCard title="مقطع تحصیل" text="کاردانی کامپیوتر" />

        <TextSmallCard title="وضعیت خدمت" text="معافیت تحصیلی" />

        <TextSmallCard title="محل سکونت" text="خوزستان" />
      </TextContainer>
    </CardContainer>
  );
}

export default Info;
