import { BannerShadow } from '../components/@common/banners';
import { Button, Card, CardFooter, Image, Link, Divider } from '@nextui-org/react';
import { CoverBlog } from '../assets';
import { CardArticle } from '../components/@cards/card-article';
import { CoverSnippets, CoverNotes, CoverPosts } from '../assets/index';
import { ValidatorVariable } from '../components/@common/validators';
import { BannerLoader } from '../components/@loaders/banner.loader';
import { CardLoader } from '../components/@loaders/card.loader';
import { PostsLoader } from '../components/@loaders/blog-posts.loader';
import { validateArrays } from '../utils/validations';
import { useBlog } from '../hook/blog.context';

// Docker: https://appmaster.io/api/_files/QsSz55Kp9QZnZyprJbMRcX/download/
// Flutter: https://www.syncfusion.com/blogs/wp-content/uploads/2019/12/Flutter_Trends_and_Community_Updates_Social.jpg

export function Blog() {
  const { lastPosts } = useBlog();

  return (
    <main className="w-full max-w-[1000px] m-auto flex flex-col gap-5 p-5">
      <ValidatorVariable
        variable={validateArrays(lastPosts?.notes, lastPosts?.posts, lastPosts?.snippets)}
        elseComponent={<BannerLoader />}
      >
        <BannerShadow
          background={
            'https://www.syncfusion.com/blogs/wp-content/uploads/2019/12/Flutter_Trends_and_Community_Updates_Social.jpg'
          }
        >
          <h1 className="text-2xl capitalize font-extrabold text-neutral-100 flex items-center gap-3">
            Explora los articulos
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non recusandae harum nemo laudantium
            voluptate, natus est dolores, reprehenderit animi corporis expedita inventore voluptatum hic eaque earum
            maxime quod. Dicta?
          </p>
        </BannerShadow>
      </ValidatorVariable>

      {/* <ValidatorVariable
        variable={validateArrays(lastPosts?.notes, lastPosts?.posts, lastPosts?.snippets)}
        elseComponent={
          <section className="flex flex-wrap justify-center items-center gap-1 w-full">
            <CardLoader />
            <CardLoader />
            <CardLoader />
          </section>
        }
      >
        <section className="py-5 m-auto mb-12 animation-card-proyects">
          <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-1 px-8">
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <Image
                loading="lazy"
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={CoverPosts}
              />
              <CardFooter className="absolute bg-white/30 backdrop-blur-lg bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Programación.</p>
                  <p className="text-black text-tiny">Tutoriales y articulos.</p>
                </div>
                <Link href="/home/blog/articles">
                  <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Ver articulos
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <Image
                loading="lazy"
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={CoverNotes}
              />
              <CardFooter className="absolute bg-white/30 backdrop-blur-lg bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Apuntes.</p>
                  <p className="text-black text-tiny">Apuntes universitarios.</p>
                </div>
                <Link href="/home/blog/notes">
                  <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Ver articulos
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <Image
                loading="lazy"
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={CoverSnippets}
              />
              <CardFooter className="absolute bg-white/30 backdrop-blur-lg bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Snippets.</p>
                  <p className="text-black text-tiny">Snippets y ejercicios.</p>
                </div>
                <Link href="/home/blog/snippets">
                  <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Ver articulos
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </ValidatorVariable> */}

      <div className="w-full my-4"></div>

      <ValidatorVariable
        variable={validateArrays(lastPosts?.notes, lastPosts?.posts, lastPosts?.snippets)}
        elseComponent={<PostsLoader />}
      >
        <section className="w-full py-5">
          <Divider className="my-4" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-12 my-9">
            {lastPosts?.posts?.map((post) => (
              <CardArticle
                url={post.cover}
                title={post.name}
                description={post.description}
                zoomed={true}
                blurred={true}
                path={`/home/blog/posts/${post.id}-${post.name}`}
                key={post.id}
              />
            ))}
          </div>

          <Divider className="my-4" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-12 my-9">
            {lastPosts?.snippets?.map((post) => (
              <CardArticle
                url={post.cover}
                title={post.name}
                description={post.description}
                zoomed={true}
                blurred={true}
                path={`/home/blog/snippets/${post.id}-${post.name}`}
                key={post.id}
              />
            ))}
          </div>

          <Divider className="my-4" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-12 my-9">
            {lastPosts?.notes?.map((post) => (
              <CardArticle
                url={post?.cover}
                title={post?.name}
                description={post?.description}
                matter={post?.matter}
                zoomed={true}
                blurred={true}
                path={`/home/blog/notes/${post?.id}-${post?.name}`}
                key={post?.id}
              />
            ))}
          </div>

          <Divider className="my-4" />
        </section>
      </ValidatorVariable>
    </main>
  );
}
