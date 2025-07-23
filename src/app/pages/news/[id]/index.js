import Link from 'next/link';
import { useState, useEffect } from 'react';
import CategoriesMenu from '../../../components/CategoriesMenu';
import { useRouter } from 'next/router';

// Haberlerin fotoğraf yollarını tanımlayalım
const newsImages = {
    '01': '/assets/14/14.png',
    '02': '/assets/19/19.png',
    '03': '/assets/11/11.png',
    '04': '/assets/12/12.png',
    '05': '/assets/13/13.png',
    '06': '/assets/15/15.png',
    '07': '/assets/16/16.png',
    '08': '/assets/17/17.png',
    '09': '/assets/18/18.png',
    '10': '/assets/11/11.png',
};

// 1000 kelimelik lorem ipsum metni (yaklaşık 1000 kelime, birkaç paragrafa bölünmüş)
const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollit anim id est laborum.
`.trim();

export default function Page() {
    const [selectedItem, setSelectedItem] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    // Set the selected item when the router query is available
    useEffect(() => {
        if (id && !selectedItem) {
            
            const detailedId = String(id).padStart(2, '0');
            if (newsImages[detailedId]) {
                setSelectedItem(detailedId);
            }
        }
    }, [id, selectedItem]);

    // Haberleri sayısal sıraya göre sırala
    const sortedNewsItems = Object.keys(newsImages).sort((a, b) => parseInt(a) - parseInt(b));

    return (
        <main className="flex flex-col min-h-screen bg-white md:flex-row m-0 p-0">
            {/* Left Section (News List) - Top on mobile, scrollable horizontally */}
            <div className="w-[480px] bg-white border-b md:border-r border-gray-300 md:border-b-0 overflow-x-auto md:overflow-y-auto md:h-screen">
                <ul className="flex flex-row text-black text-sm w-full whitespace-nowrap md:flex-col">
                    {sortedNewsItems.map((item) => (
                        <li
                            key={item}
                            className={`relative border-b border-gray-300 p-6 hover:bg-yellow-50 flex flex-row items-start transition duration-300 ${selectedItem === item ? 'bg-yellow-50' : ''
                                }`}
                            onClick={() => {
                                setSelectedItem(item);
                                router.push(`/news/${parseInt(item)}`, undefined, { shallow: true });
                            }}
                        >
                            <div className="absolute top-6 left-6 font-bold text-2xl pt-0 md:text-5xl opacity-25">{item}</div>
                            <img
                                className="mr-7 pt-9"
                                src={newsImages[item]}
                                alt={`Haber ${item}`}
                                width={160}
                                height={48}
                            />
                            <div className="flex-1 flex flex-col">
                                <p className="text-sm font-bold" style={{ color: '#000000' }}>
                                    <br></br>
                                    Lorem ipsum dolor sit amet...
                                </p>
                                <br />
                                <p className="text-xs" style={{ color: '#000000' }}>
                                    3 saat önce
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Section (Details) - Bottom on mobile, full width */}
            <div className="flex-1 bg-yellow-50 p-4 md:p-8 border-t-0 md:border-l-0 md:border-t-0 h-full md:h-screen overflow-y-auto">
                <div className="text-black">
                    {selectedItem ? (
                        <div className="flex flex-col">
                            <h1 className="mb-4 text-xl md:text-2xl font-bold">
                                Haber {selectedItem}
                            </h1>
                            {/* Fotoğraf: Alt border'a yakın */}
                            <div className="flex flex-col justify-end pt-8 pb-2">
                                <img
                                    className="w-full max-w-2xl mx-auto object-cover"
                                    src={newsImages[selectedItem]}
                                    alt={`Haber ${selectedItem}`}
                                    width={600}
                                    height={400}
                                />
                            </div>
                            {/* Lorem Ipsum Metni */}
                            <div className="mt-4 text-sm md:text-base">
                                {loremIpsum.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="mb-4 text-xl md:text-2xl font-bold">
                            Bir haber seçin
                        </div>
                    )}
                </div>
            </div>
        </main >
    );
}

Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};
