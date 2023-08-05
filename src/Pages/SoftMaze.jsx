import { SoftMazeSquare } from "../Components/SoftMazeSquare"

export const SoftMaze = () => {
  return (
    <section className='flex flex-col items-center'>
      <h1 className='m-10 text-4xl font-cocogoose font-bold'>HERE IS THE MAZE</h1>
      <div className='w-[700px] h-[700px]'>
        <div className='grid grid-cols-10 gap-0'>
          <SoftMazeSquare borders='border-t-8 border-l-8 border-b-4' />
          <SoftMazeSquare borders='border-t-8' />
          <SoftMazeSquare borders='border-t-8 border-r-4' />
          <SoftMazeSquare borders='border-t-8 border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-t-8 border-r-4' />
          <SoftMazeSquare borders='border-t-8 border-l-4' />
          <SoftMazeSquare borders='border-t-8 border-r-4' />
          <SoftMazeSquare borders='border-t-8 border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-t-8 border-b-4' />
          <SoftMazeSquare borders='border-t-8' />
        </div>
        <div className='grid grid-cols-10'>
          <SoftMazeSquare borders='border-l-8 border-t-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4' />
          <SoftMazeSquare borders='border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4' />
          <SoftMazeSquare borders='border-r-8 border-b-4' />
        </div>
        <div className='grid grid-cols-10'>
          <SoftMazeSquare borders='border-l-8 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-b-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-t-4' />
          <SoftMazeSquare borders='border-t-4 border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4 border-r-8' />
        </div>
        <div className='grid grid-cols-10'>
          <SoftMazeSquare borders='border-l-8' />
          <SoftMazeSquare borders='border-t-4 border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4' />
          <SoftMazeSquare borders='border-t-4 border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4' />
          <SoftMazeSquare borders='border-t-4 border-r-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-r-8' />
        </div>
        <div className='grid grid-cols-10'>
          <SoftMazeSquare borders='border-l-8 border-r-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4' />
          <SoftMazeSquare borders='border-t-4 border-b-4' />
          <SoftMazeSquare borders='border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4' />
          <SoftMazeSquare borders='border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4' />
          <SoftMazeSquare borders='border-t-4' />
          <SoftMazeSquare borders='border-r-8 border-b-4' />
        </div>
        <div className='grid grid-cols-10'>
          <SoftMazeSquare borders='border-l-8 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4 border-r-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4' />
          <SoftMazeSquare borders='border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4 border-r-8' />
        </div>
        <div className='grid grid-cols-10'>
          <SoftMazeSquare borders='border-l-8 border-b-4' />
          <SoftMazeSquare borders='border-t-4 border-b-4' />
          <SoftMazeSquare borders='' />
          <SoftMazeSquare borders='' />
          <SoftMazeSquare borders='border-t-4 border-b-4' />
          <SoftMazeSquare borders='' />
          <SoftMazeSquare borders='border-t-4 border-b-4' />
          <SoftMazeSquare borders='border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-r-8' />
        </div>
        <div className='grid grid-cols-10'>
          <SoftMazeSquare borders='border-t-4 border-l-8' />
          <SoftMazeSquare borders='border-t-4 border-b-4' />
          <SoftMazeSquare borders='border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-r-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4' />
          <SoftMazeSquare borders='border-t-4' />
          <SoftMazeSquare borders='border-b-4' />
          <SoftMazeSquare borders='border-r-8 border-b-4' />
        </div>
        <div className='grid grid-cols-10'>
          <SoftMazeSquare borders='border-l-8 border-r-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4 border-b-4' />
          <SoftMazeSquare borders='border-b-4' />
          <SoftMazeSquare borders='border-r-4' />
          <SoftMazeSquare borders='border-l-4' />
          <SoftMazeSquare borders='border-b-4' />
          <SoftMazeSquare borders='border-r-4' />
          <SoftMazeSquare borders='border-l-4 border-r-4 border-b-4' />
          <SoftMazeSquare borders='border-t-4 border-l-4' />
          <SoftMazeSquare borders='border-t-4 border-r-8' />
        </div>
        <div className='grid grid-cols-10'>
          <SoftMazeSquare borders='border-b-8' />
          <SoftMazeSquare borders='border-t-4 border-b-8' />
          <SoftMazeSquare borders='border-t-4 border-b-8' />
          <SoftMazeSquare borders='border-b-8' />
          <SoftMazeSquare borders='border-b-8' />
          <SoftMazeSquare borders='border-t-4 border-r-4 border-b-8' />
          <SoftMazeSquare borders='border-l-4 border-b-8' />
          <SoftMazeSquare borders='border-t-4 border-b-8' />
          <SoftMazeSquare borders='border-r-4 border-b-8' />
          <SoftMazeSquare borders='border-r-8 border-l-4 border-b-8' />
        </div>
      </div>
    </section>
  )
}