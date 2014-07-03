Post.delete_all
Post.create!([
  { title: '新朋老友齐相聚', content: 'Some contents...' },
  { title: '英式下午茶＋精美点心', content: 'Some contents...' },
  { title: '我是麦霸半决赛', content: 'Some contents...' },
  { title: '瑜伽修行课', content: 'Some contents...' },
  { title: '夜猫子的天堂', content: 'Some contents...' }
])

Category.delete_all
Category.create!([
  { name: '安的客厅', url_name: 'parlor' },
  { name: '安的餐厅', url_name: 'cuisine' },
  { name: '安的客房', url_name: 'bedroom' },
  { name: '安的书房', url_name: 'study' },
  { name: '安的阳台', url_name: 'balcony' }
])
