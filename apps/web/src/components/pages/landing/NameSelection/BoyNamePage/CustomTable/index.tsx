import { COLORS_LIST } from '@theme/colors';

import CustomTypography from '@components/ui/CustomTypography';

import { TITLE_LIST } from './constant';
import { CustomTableProps } from './type';

const CustomTable = ({ data }: CustomTableProps) => {
  return (
    <div className="w-full  mx-auto rounded-xl  overflow-hidden" id="">
      <table className="w-full border-collapse text-center font-sans text-[1.45rem] mobile:text-[1.25rem]">
        <thead>
          <tr className=" text-white " style={{ backgroundColor: COLORS_LIST.Blue_500 }}>
            {TITLE_LIST.map((title, index) => {
              return (
                <th
                  className="py-3 px-4 uppercase tracking-wider font-bold"
                  key={index}
                  style={{ border: `1px solid ${COLORS_LIST.Blue_300}` }}
                >
                  <CustomTypography fontSize="Title_Small" color={'Primary_OnPrimary'}>
                    {title}
                  </CustomTypography>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? COLORS_LIST.Blue_50 : COLORS_LIST.Blue_100 }}>
              <td className="py-3 px-4 " style={{ border: `1px solid ${COLORS_LIST.Blue_300}` }}>
                <CustomTypography fontSize="Body_Medium" color={'Neutral_OnBackground'}>
                  {item.title}
                </CustomTypography>
              </td>
              <td className="py-3 px-4 " style={{ border: `1px solid ${COLORS_LIST.Blue_300}` }}>
                <CustomTypography fontSize="Body_Medium" color={'Neutral_OnBackground'}>
                  {item.description}
                </CustomTypography>
              </td>
              <td className="py-3 px-4 " style={{ border: `1px solid ${COLORS_LIST.Blue_300}` }}>
                <CustomTypography fontSize="Body_Medium" color={'Neutral_OnBackground'}>
                  {item.rootName || '-'}
                </CustomTypography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
