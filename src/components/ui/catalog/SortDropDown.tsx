import { EnumProductSort } from '@/services/product/product.types'
import { Dispatch, FC, SetStateAction } from 'react'

interface ISortDropdown {
  sortType: EnumProductSort
  setSortType: Dispatch<SetStateAction<EnumProductSort>>
}
const SortDropDown: FC<ISortDropdown> = ({ setSortType, sortType }) => {
  return (
    <div className="text-right mb-5">
      <select
        value={sortType}
        onChange={e => setSortType(e.target.value as any)}
        className="appearance-none py-1 px-2 bg-white border-gray"
      >
        {Object.keys(EnumProductSort).map(key => {
          return (
            <option key={key} value={EnumProductSort[key]}>
              {EnumProductSort[key]}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SortDropDown
