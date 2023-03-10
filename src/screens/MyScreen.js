import { FlatList, StyleSheet, Text, View } from 'react-native';
const MyScreen = () => {
  const list = [
    (MyDealList = [
      { id: 'my_dealHead', task: '나의 거래' },
      { id: 'my_deal1', task: '관심목록' },
      { id: 'my_deal2', task: '판매내역' },
      { id: 'my_deal3', task: '구매내역' },
      { id: 'my_deal4', task: '중고거래 가계부' },
    ]),
    ,
    (MyHoodLifeList = [
      { id: 'my_hood_lifeHead', task: '나의 동네생활' },
      { id: 'my_hood_life1', task: '동네생활 글/댓글' },
    ]),
    ,
    (MyBusinessList = [
      { id: 'my_businessHead', task: '나의 비즈니스' },
      { id: 'my_business1', task: '비즈프로필 관리' },
      { id: 'my_business2', task: '광고' },
      { id: 'my_business3', task: '동네홍보 글' },
    ]),
    ,
    (EctList = [
      { id: 'ectHead', task: '기타' },
      { id: 'ect1', task: '내 동네 설정' },
      { id: 'ect2', task: '동네 인증하기' },
      { id: 'ect3', task: '알림 키워드 설정' },
      { id: 'ect4', task: '자주 묻는 질문' },
      { id: 'ect5', task: '친구초대' },
    ]),
    ,
  ];
  return (
    <View style={StyleSheet.container}>
      {list.map(function (item) {
        return (
          <FlatList
            data={item}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                  {item.id === 'my_dealHead' ||
                  item.id === 'my_hood_lifeHead' ||
                  item.id === 'my_businessHead' ||
                  item.id === 'ectHead' ? (
                    <Text style={{ fontSize: 40 }}>{item.task}</Text>
                  ) : (
                    <Text style={{ fontSize: 20 }}>{item.task}</Text>
                  )}
                </View>
              );
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyScreen;
