import React, { useState, useRef } from "react";
import {
  View,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import BoardBackground from "../components/BoardBackground";
import Gamer from "../components/Gamer";
import SelectedCard from "../components/SelectedCard";
import { IconCardHAs, IconCardVAs } from "../icons";

const Results = () => {
  const [card, setCard] = useState({
    selected: null,
    send: null,
  });
  let translateY = useRef(new Animated.Value(0));
  let translateX = useRef(new Animated.Value(0));
  const cardAnimation = () => {
    Animated.stagger(250, [
      Animated.spring(translateY.current, {
        useNativeDriver: true,
        toValue: -Dimensions.get("window").height / 2 - 100 / 2,
      }),
      Animated.spring(translateX.current, {
        useNativeDriver: true,
        toValue: Dimensions.get("window").width / 2 - 110 / 2,
      }),
    ]).start();
    setCard((p) => ({ ...p, send: 0 }));
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <BoardBackground
        Dimensions={Dimensions.get("screen")}
        startColor={"#008111"}
        finishColor={"#000552"}
      />
      <SelectedCard Dimensions={Dimensions.get("screen")} />
      <Gamer
        Dimensions={Dimensions.get("screen")}
        gamer={"Mehmet"}
        location="top"
      />
      <Gamer
        Dimensions={Dimensions.get("screen")}
        gamer={"Ayşe"}
        location="left"
      >
        <View style={styles.gamerLeftColumn}>
          <View style={styles.gamerLeftRow}>
            <IconCardHAs />
            <IconCardHAs style={styles.gamerLeftTouch} />
          </View>
          <View style={styles.gamerLeftRow}>
            <IconCardHAs />
            <IconCardHAs style={styles.gamerLeftTouch} />
            <IconCardHAs style={styles.gamerLeftTouch} />
            <IconCardHAs style={styles.gamerLeftTouch} />
          </View>
          <View style={styles.gamerLeftRow}>
            <IconCardHAs />
            <IconCardHAs style={styles.gamerLeftTouch} />
            <IconCardHAs style={styles.gamerLeftTouch} />
          </View>
        </View>
      </Gamer>
      <Gamer
        Dimensions={Dimensions.get("screen")}
        gamer={"Fatma"}
        location="right"
      />
      <Gamer
        Dimensions={Dimensions.get("screen")}
        gamer={"Ahmet"}
        location="bottom"
      >
        <View style={styles.gamerBottomRow}>
          <TouchableOpacity
            style={styles.gamerBottomTouch}
            disabled={card.send === 0}
            onPress={() => {
              if (card.selected === 0) {
                cardAnimation();
              } else {
                setCard((p) => ({ ...p, selected: 0 }));
              }
            }}
          >
            {console.log(card)}
            <Animated.View
              style={{
                transform: [
                  {
                    translateX:
                      card.selected === 0
                        ? translateX.current
                        : card.send === 0
                        ? translateX.current
                        : 0,
                  },
                  {
                    translateY:
                      card.selected === 0
                        ? translateY.current
                        : card.send === 0
                        ? translateX.current
                        : 0,
                  },
                ],
              }}
            >
              <IconCardVAs
                style={{
                  bottom: card.selected === 0 && card.send !== 0 ? 30 : 0,
                }}
              />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gamerBottomTouch}
            onPress={() => {
              setCard((p) => ({ ...p, selected: 1 }));
            }}
          >
            <IconCardVAs style={{ bottom: card.selected === 1 ? 30 : 0 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gamerBottomTouch}
            onPress={() => {
              setCard({ selected: 2 });
            }}
          >
            <IconCardVAs style={{ bottom: card.selected === 2 ? 30 : 0 }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gamerBottomTouch}
            onPress={() => {
              setCard({ selected: 3 });
            }}
          >
            <IconCardVAs style={{ bottom: card.selected === 3 ? 30 : 0 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gamerBottomTouch}
            onPress={() => {
              setCard({ selected: 4 });
            }}
          >
            <IconCardVAs style={{ bottom: card.selected === 4 ? 30 : 0 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gamerBottomTouch}
            onPress={() => {
              setCard({ selected: 5 });
            }}
          >
            <IconCardVAs style={{ bottom: card.selected === 5 ? 30 : 0 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gamerBottomTouch}
            onPress={() => {
              setCard({ selected: 6 });
            }}
          >
            <IconCardVAs style={{ bottom: card.selected === 6 ? 30 : 0 }} />
          </TouchableOpacity>
        </View>
      </Gamer>
    </View>
  );
};

export default Results;
const { width, height } = Dimensions.get("window");
const gamerBottomRowHeight = Platform.OS === "ios" ? 10 : 0;
const styles = StyleSheet.create({
  gamerBottomTouch: {
    marginLeft: -70,
  },
  gamerLeftTouch: {
    marginLeft: -70,
  },
  gamerBottomRow: {
    position: "absolute",
    flexDirection: "row",
    left: -width / 2 + 80, // TODO bu alan çok sağlıklı olmadı
    bottom: -height / 2 + gamerBottomRowHeight,
  },
  gamerLeftColumn: {
    position: "absolute",
    left: -15,
    flex: 1,
    flexDirection: "column",
  },
  gamerLeftRow: {
    flexDirection: "row",
    left: -width / 2 + 50,
    marginVertical: 10,
    bottom: 50,
  },
});
