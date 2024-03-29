import { FiSearch } from 'react-icons/fi';
import { Button, Pagination, Image } from '@nextui-org/react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CardArticle } from '../components/@cards/card-article';
import { Validator } from '../components/@common/validators';
import { SadDinosoure } from '../assets';
import { useDividePosts, usePostsByRoute, useSearchPost } from '../hook/post';
import { validateArrays } from '../utils/validations';

export function BlogArticlesType() {
  const { pathname } = useLocation();
  const { type } = useParams();
  const [page, setPage] = useState(1);
  const Posts = usePostsByRoute(pathname);
  const PostsSearched = useSearchPost(Posts.posts);
  const newPosts = useDividePosts(PostsSearched.newPosts, 12);

  /** Esta función guarda el texto a buscar */
  const handdleSearch = (e) => PostsSearched.setSearh(e?.target?.value);

  /** Identifica que numero de pagina se va a cargar */
  const handlePage = (e) => setPage(e);

  return (
    <main className="w-full max-w-[1000px] m-auto flex flex-col gap-5 p-5">
      <section className="w-full p-3">
        <div className="w-full rounded-3xl flex items-center p-3 shadow-xl bg-neutral-200/80 dark:bg-neutral-900 animation-search">
          <FiSearch className="ml-3 opacity-70" />
          <input
            type="text"
            placeholder="¿Que articulo buscas?"
            className="w-full p-2 bg-transparent dark:placeholder:text-gray-200/80 placeholder:text-gray-950/80 border-none outline-none"
            onChange={handdleSearch}
          />
        </div>
      </section>

      <section className="w-full py-9">
        {/* <h1 className="text-4xl capitalize mb-12 font-bold">Articulos</h1> */}
        <Validator validation={validateArrays(newPosts?.posts)} elseComponent={<MessageNotNotesFound />}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {newPosts.posts[page - 1]?.map((post) => (
              <div className="m-auto" key={Math.random()}>
                <CardArticle
                  width={'100%'}
                  height={200}
                  url={post?.cover}
                  title={post?.name}
                  description={post?.description}
                  lang={post?.lang}
                  zoomed={true}
                  path={`/home/blog/${type}/${post?.id}-${post?.name}`}
                />
              </div>
            ))}
          </div>
        </Validator>
      </section>

      <section className="w-full flex justify-center items-center">
        <Pagination showControls total={newPosts.size} initialPage={page} onChange={handlePage} />
      </section>
    </main>
  );
}

function MessageNotNotesFound() {
  return (
    <div className="min-h-[250px] w-full flex flex-col items-center animation-WatchDownUpOpacity">
      <Image src={SadDinosoure} width={300} isBlurred />
    </div>
  );
}
