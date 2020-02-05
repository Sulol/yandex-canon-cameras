import React from 'react'
import Block from './components/Blocks/Blocks.js'

export default function App(){
    const comp = [
        {name: 'Canon EOS 6D Mark II Body', price: 71190, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1808939/img_id7809127159419930985.jpeg/9hq", title: "camera body"},
        {name: 'Canon EF 600mm f/4L IS III USM', price: 1019900, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1750207/img_id4848808454298624803.jpeg/9hq", title: "lenses"},
        {name: 'Canon Speedlite 600EX II-RT', price: 28990, imgUrl: "https://avatars.mds.yandex.net/get-mpic/195452/img_id8188778505243656988/9hq", title: "speedlight"},
        {name: 'Sachtler System FSB 10 ENG 2 CF', price: 338644, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1925870/img_id6569719892605731367.jpeg/9hq", title: "trypod"},
    ]
    return (
        <div>
            <Block name={comp[0].name} price={comp[0].price} imgUrl={comp[0].imgUrl} title={comp[0].title}  />
            <Block name={comp[1].name} price={comp[1].price} imgUrl={comp[1].imgUrl} title={comp[1].title}  />
            <Block name={comp[2].name} price={comp[2].price} imgUrl={comp[2].imgUrl} title={comp[2].title}  />
            <Block name={comp[3].name} price={comp[3].price} imgUrl={comp[3].imgUrl} title={comp[3].title}  />
        </div>
    )
}