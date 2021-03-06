Category.delete_all
Category.create!([
  { name: '安的客厅', url_name: 'parlor' },
  { name: '安的餐厅', url_name: 'cuisine' },
  { name: '安的客房', url_name: 'bedroom' },
  { name: '安的书房', url_name: 'study' },
  { name: '安的阳台', url_name: 'balcony' }
])

Post.delete_all
parlor = Category.where(url_name: 'parlor').first
parlor.posts.create!([
  { title: '新朋老友齐相聚', content: '<p>Some contents...</p>' },
  { title: '我是麦霸半决赛', content: '<q>Some contents...</q>' },
])

bedroom = Category.where(url_name: 'bedroom').first
bedroom.posts.create! title: '夜猫子的天堂', content: '<blockquote>Some contents...</blockquote>'

cuisine = Category.where(url_name: 'cuisine').first
cuisine.posts.create! title: '英式下午茶＋精美点心', content: '<pre>Some contents...</pre>' 

balcony = Category.where(url_name: 'balcony').first
balcony.posts.create! title: '瑜伽修行课', content: '<strong>Some contents...</strong>'
