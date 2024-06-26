'use client'
import Link from 'next/link'
import Image from 'next/image'
export default function Page(): JSX.Element {
  return (
    <div className="flex justify-center flex-col lg:pt-40 pt-8 pb-10">
      <div className="text-4xl text-center mb-8">Demos</div>
      <div className="mx-auto grid grid-cols-1 font-bold w-[90vw] gap-4 lg:grid-cols-3">
        <div className="rounded-lg overflow-hidden border border-gray-400">
          <Link href="/normal">
            <div className="w-full h-[45vw] lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image
                src="/normal.gif"
                width={800}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">基础效果</p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-400">
          <Link href="/scene">
            <div className="w-full h-[45vw] lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image
                src="/circle-texture.gif"
                width={800}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">场景贴图 实现3D看房</p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-400">
          <Link href="/sky-box">
            <div className="w-full h-[45vw] lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image
                src="/circle-texture.gif"
                width={800}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">天空盒效果 实现3D看房</p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-400">
          <Link href="/circle-texture">
            <div className="w-full h-[45vw] lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image
                src="/circle-texture.gif"
                width={800}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">全景贴图效果 实现3D看房</p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-400">
          <Link href="/earth">
            <div className="w-full h-[45vw] lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image
                src="/earth.gif"
                width={800}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">3D地球</p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-400">
          <Link href="/dance">
            <div className="w-full h-[45vw] lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image
                src="/dance.gif"
                width={800}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">跳个舞吧</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
