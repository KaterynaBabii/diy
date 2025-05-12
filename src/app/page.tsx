"use client"
import React, { useState, useEffect } from 'react'
import { FilterOptions} from './types/Filters';
import dynamic from 'next/dynamic'
import {brands} from "@/app/service/api";
 
const NoSSRSelect = dynamic(() => import('react-select'), { ssr: false })

const defaultOption: FilterOptions = {
  value: '',
  label: ''
}

export default function Home() {

  const [yearsOptions, setYearsOptions] = useState<FilterOptions[]>([]);
  const [brandOptions, setBrandOptions] = useState<FilterOptions[]>([]);
  const [modelOptions, setModelOptions] = useState<FilterOptions[]>([])
  const [selectedYear, setSelectedYear] = useState<FilterOptions>();
  const [selectedBrand, setSelectedBrand] = useState<FilterOptions>();
  const [selectedModel, setSelectedModel] = useState<FilterOptions>();

  const getYearsOptions = () => {
    const currentYear = new Date().getFullYear();
    const start = currentYear - 50;
    const end = currentYear;

    const years: FilterOptions[] = [];
    for (let i = end; i >= start; i--) {
      years.push({
        label: i + "",
        value: i + ""
      });
    }
    setYearsOptions(years)
  }

  useEffect(() => {
    getYearsOptions();
    setBrandOptions(brands);
  },[])

  const onYearSelect = (selected) => {
    if(selectedYear?.value == selected?.value) return;
    setSelectedYear(selected)
  }

  const onBrandSelect = (selected) => {
      setModelOptions(selected.models);
      setSelectedBrand(selected);
      setSelectedModel(defaultOption)

  }
  const onModalSelect  = (selected) => {
      setSelectedModel(selected)
  }

  return (
    <div className={`{ p-8 pb-20 gap-16}`}>
      <div className={`grid items-center justify-items-center gap-16 h-full`}>
        <div className={'flex items-center flex-col justify-center align-center m-6 justify-items-center'}>
          <div className={'flex items-center justify-center align-center m-2'}>
            <div className='text-3xl font-bold items-center p-3'>Car Service </div>
          </div>
          <div className='text-xl items-center p-1'>Select year, make and modal name to review available content</div>
        
          <div className="flex items-center justify-center align-center gap-8 m-2" suppressHydrationWarning>
            <NoSSRSelect
              styles={{
                container: provided => ({
                  ...provided,
                  width: 150
                })
              }}
              placeholder="Select year"
              name="year"
              options={yearsOptions}
              classNamePrefix="select"
              onChange={onYearSelect}
              isSearchable
              
            />
           <NoSSRSelect
              placeholder="Select make"
              name="brands"
              options={brandOptions}
              classNamePrefix="select"
              className="w-[300px]"
              isClearable={!selectedBrand}
              isSearchable
              onChange={onBrandSelect}
            />
            {(modelOptions?.length && selectedBrand?.label) ? <NoSSRSelect
              placeholder="Select model"
              name="model"
              options={modelOptions}
              classNamePrefix="select"
              className="w-[300px]"
              isClearable={!!selectedModel?.value}
              isSearchable
              onChange={onModalSelect}
              value={selectedModel}
            /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
