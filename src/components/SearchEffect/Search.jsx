import { useState } from "react";
import Model from "./model/model";
import '../SearchEffect/model.css'
const Search = () => {
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };

  if(model) {
    document.body.classList.add('active-model')
  } else {
    document.body.classList.remove('active-model')
  }

  return (
    <>
      <div className="flex items-center justify-center mt-10 ">
        <input
          onClick={toggleModel}
          className="p-2 w-[400px] bg-indigo-200 rounded-lg"
          type="text"
        />
      </div>

      {model && (
        <div>
          <div
            onClick={toggleModel}
            className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-indigo-500/70 backdrop-blur-sm"
          ></div>
          <div className="absolute top-[40%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white py-[14px] px-[28px] rounded-lg max-w-[600px] min-w-[300px] h-[20em]">
            <input
              className="p-2 w-[400px] bg-indigo-200 rounded-lg"
              type="text"
            />
            <div className="bg-slate-400 p-2 rounded-md mt-3 cursor-pointer">
                <h3 className="text-white text-lg font-medium">Transform</h3>
                <p className="font-light text-white text-sm">Transform in tailwind is so useful. check out</p>
            </div>
            <div className="bg-slate-400 p-2 rounded-md mt-3 cursor-pointer">
                <h3 className="text-white text-lg font-medium">Back-drop</h3>
                <p className="font-light text-white text-sm">back-drop is one of kind. check out</p>
            </div>
            <div className="bg-slate-400 p-2 rounded-md mt-3 cursor-pointer">
                <h3 className="text-white text-lg font-medium">Padding</h3>
                <p className="font-light text-white text-sm">Padding in tailwind is so useful. check out</p>
            </div>
            {/* <button
              className="absolute top-[10px] right-[10px] px-[17px] py-[5px] bg-blue-200 rounded"
              onClick={toggleModel}
            >
              X
            </button> */}
          </div>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, pariatur molestiae? Perspiciatis voluptate amet omnis quaerat harum inventore quasi? Maiores ipsam molestias cupiditate in dignissimos quae laboriosam excepturi sed, non dicta ratione, aspernatur fugiat, doloremque repellat praesentium officia autem reiciendis porro odit quis nihil at dolore dolorum tenetur? Est facilis, fugit porro ea deserunt animi fuga officiis ullam vero, temporibus maxime tenetur praesentium illo sunt expedita inventore id aperiam. Cumque quam in ex, eaque fuga animi iusto optio molestiae aliquid velit libero ipsa corrupti ullam est consectetur quisquam nostrum ad, quod voluptatum laudantium. Dolore, quasi. Possimus, modi harum cupiditate deleniti reiciendis sapiente illum! Consequatur, doloribus veniam iste nesciunt officiis amet possimus rem, sapiente maxime voluptatem magnam, nam placeat ratione odit perferendis iusto accusantium similique sint est harum. Nam libero ex voluptatum in fuga voluptatibus omnis obcaecati repudiandae consequatur necessitatibus doloremque odit accusantium numquam cumque, accusamus, quae impedit eum. Ut sequi sit iusto magni rerum itaque commodi aspernatur. Ipsam tempore labore quam assumenda omnis. Odio eaque magnam iste, vitae ut doloribus impedit adipisci, laborum hic perspiciatis a quas fuga in cumque vel culpa ex explicabo. Dignissimos quaerat alias magni iste suscipit tempore corrupti recusandae. Ut quae possimus, harum amet ducimus animi facilis eligendi ratione nesciunt quaerat totam iure explicabo numquam sapiente doloribus commodi nisi, eius, impedit maiores eos. Incidunt, error dolorem officia facilis voluptatem rerum assumenda consectetur debitis quidem, aperiam ducimus molestias vel voluptate excepturi dolor nulla laboriosam commodi ipsum nihil cupiditate. Molestias, ut rem. Voluptatibus earum necessitatibus aspernatur, repellendus architecto deserunt? Aspernatur, nostrum ab perspiciatis atque et modi minus natus cum quas voluptate! Odit architecto praesentium tempora fugiat explicabo ex recusandae odio hic! Vero accusantium temporibus sequi natus totam repellendus atque delectus non id doloribus, perferendis aut illo ad debitis tenetur fugiat similique, quaerat recusandae tempora dolores vel numquam inventore nesciunt. Nam nisi voluptate officiis, sapiente numquam natus! Unde assumenda, molestiae nam exercitationem ea iusto ab repudiandae officiis laboriosam beatae, culpa recusandae odit consequuntur quos itaque eius distinctio odio. Reprehenderit id corrupti nisi quae aut, tempore repellendus nam ea, magnam excepturi aspernatur illo tenetur? Quibusdam cum modi ducimus nisi, quis assumenda deserunt obcaecati error odit ipsa commodi sequi qui! Sunt iusto quisquam voluptates illo odit adipisci necessitatibus qui, nemo atque doloribus! Ex asperiores ipsa rem aspernatur vel at eius, eum odio cupiditate reiciendis architecto quod doloribus ducimus omnis fugiat numquam, nam laudantium laboriosam accusantium earum nesciunt. Ipsum vel voluptates explicabo voluptatem aperiam laboriosam commodi doloremque magnam libero reiciendis. Modi quo temporibus iusto nemo, pariatur eveniet nostrum reiciendis cum explicabo placeat! Dolore neque consequuntur perferendis minus deleniti nulla ex voluptatem accusantium, nobis nihil commodi blanditiis consectetur maxime id recusandae animi officia inventore! Id dolor delectus laborum molestiae enim laudantium maxime, maiores nulla inventore dolores excepturi facere sit eaque officiis fuga exercitationem consectetur, earum, sunt voluptates! Tempore perspiciatis odio exercitationem ullam, fugit nostrum autem ad accusamus soluta tempora. Asperiores maxime atque neque corporis quod. Quos repellendus consequatur laudantium ullam voluptate, dolorum eos maxime necessitatibus omnis molestiae perferendis, beatae alias fugit fuga nisi maiores velit itaque vero aut iure quis asperiores provident, porro natus? Pariatur eos veniam, nam quis tempora labore odio repellat soluta repudiandae est quibusdam tempore sit cumque harum nobis voluptas nulla nesciunt explicabo excepturi dolorem dolorum eum rem eligendi. Nostrum eligendi at ipsam sint ipsa incidunt harum esse doloremque quas commodi temporibus animi, doloribus quia rem dicta impedit in laboriosam, vitae quaerat minima porro nemo! Fugit cumque delectus odit commodi fugiat? Explicabo, labore quam! Eos cum inventore aspernatur sit deleniti et corporis minus illo, ipsam nisi commodi eius itaque architecto nostrum natus fuga! Eius, distinctio suscipit sapiente necessitatibus laborum voluptate? Assumenda facilis sequi facere molestiae. Recusandae amet quo esse provident asperiores magnam quia impedit corrupti harum ut, quae sunt accusamus nobis enim facere quod reprehenderit accusantium. Sapiente veniam quas obcaecati magnam temporibus ullam? Quasi quidem sed saepe molestias quo ipsum, consequatur minus ea pariatur impedit minima officia quod vitae, nostrum cupiditate exercitationem libero molestiae mollitia perspiciatis. Quos impedit, expedita quibusdam vitae aperiam atque optio necessitatibus et voluptatem eligendi voluptas sunt tempore eos dolorum non doloribus eaque error, odio omnis iusto! Quibusdam autem atque harum. Nulla, eius amet quod a culpa quia obcaecati delectus! Ducimus dolor ullam vel recusandae, quia optio nisi dolore repudiandae, ut minus quasi nesciunt blanditiis voluptatum aut sequi enim numquam. Velit maxime praesentium odit temporibus at molestiae architecto nisi aut dolores incidunt blanditiis maiores unde, voluptatum modi, dolore accusamus possimus fugiat! Fuga laudantium quia id autem maiores alias ab eius, vero officiis unde, quasi quod minima corporis voluptatum qui. Eaque labore magnam voluptate. Eligendi velit expedita modi? Possimus natus sunt corrupti quaerat optio? Fuga vel dolore nesciunt nobis harum magni delectus earum ex magnam expedita. Excepturi consectetur commodi expedita aspernatur cupiditate impedit esse quam vero tempora incidunt deleniti eum tempore distinctio ratione eius, nisi necessitatibus consequatur voluptates itaque illum, natus, optio labore nihil! Officia tempora aspernatur ducimus a ipsam voluptatibus consequuntur quasi mollitia laborum quam, necessitatibus fuga nobis ex nisi voluptatum quis totam eius distinctio, consequatur dignissimos modi aliquam autem. Libero sit, vero iste laudantium incidunt unde obcaecati eaque voluptatum cum. Amet ipsum eum ad exercitationem corrupti quaerat, cum iste soluta ratione iure eligendi maiores libero similique sint aliquam! Dolorem hic praesentium dolor, a fugit quasi, quis ea magnam dicta minus, tempora cumque voluptates eius omnis totam consequatur nobis unde earum delectus perferendis adipisci eum doloribus. Officiis, illo omnis voluptas dolor fuga eius quia! Omnis quibusdam minima nostrum illo laudantium, totam fuga id unde atque obcaecati quia adipisci reprehenderit aliquid voluptatibus accusantium accusamus laborum consequuntur, non quas ipsum tenetur? Repellat provident ipsum, explicabo soluta reprehenderit molestias in corrupti accusantium doloremque? Repudiandae quis non voluptatibus error sunt cum molestiae, praesentium corrupti quos mollitia quod pariatur doloremque incidunt temporibus in? Sed delectus id, reiciendis dolor, quaerat quo autem hic illo exercitationem officiis consequuntur excepturi, sint officia eligendi voluptate molestias voluptas esse eius consectetur ut dolorum assumenda accusamus consequatur nisi! Officia sequi sapiente aperiam esse nihil quis velit modi quo cupiditate veniam quidem maiores maxime, ullam nobis, inventore delectus non!
      </p>
    </>
  );
};

export default Search;
