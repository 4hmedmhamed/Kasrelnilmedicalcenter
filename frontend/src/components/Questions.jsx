'use client'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function Questions() {
  return (
    <Container>

    <div className='row  m-2'>
<div className='col-md-6'>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header  className='w-100'>
          <p className='w-100 text-end' >
          ما هو افضل اسبوع للولادة الطبيعية؟
          </p>
        </Accordion.Header>
        <Accordion.Body>
        المشاركة عبر وسائل التواصل الاجتماعي الأسبوع الأول من الشهر التاسع يعني بأن الحمل الآن في الأسبوع ال37. والحمل بين الاسابيع ال37-40 يعتبر حمل كامل، ولكن على الرغم من ذلك تقسم هذه المرحلة إلى مرحلة النضج أو الاكتمال المبكر وهو بين الأسبوع 37-39 والنضج الكامل بين 39-40 أسبوع.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>  
        <p className='w-100 text-end' >
          هل الاسبوع 37 هو بداية الشهر التاسع؟
          </p>
        </Accordion.Header>
        <Accordion.Body>
        أنت الآن في الأسبوع السابع والثلاثين من الحمل، أي في بداية الشهر التاسع... باقي على موعد الولادة ثلاثة أسابيع! لقد اقتربنا من موعد الولادة، وستلاحظ الأم في الأيام والأسابيع القادمة بعض بوادر الولادة التي تعني أن عليها الاستعداد في هذه الأسبوع.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
<div className='col-md-6'>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header  className='w-100'>
          <p className='w-100 text-end' >
          كيف أعرف موعد الولادة بالضبط؟
          </p>
        </Accordion.Header>
        <Accordion.Body>
        الطريقة المألوفة لحساب موعد الولادة هي أن تقومي بحسب 40 أسبوعاً، أو 280 يوماً، من أول يوم لدورتك الشهرية (الحيض). يمكنك أيضاً إنقاص 3 شهور من أول يوم لدورتك الشهرية الأخيرة. ومع هذا، إنه فقط تاريخ تقديري للحمل وقد يختلف ذلك باختلاف العوامل.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>  
        <p className='w-100 text-end' >
        ما هو اقل شهر يولد فيه الناس؟
          </p>
        </Accordion.Header>
        <Accordion.Body>
        وبحسب تقرير المكتب المركزي للإحصاء لعام 2022 ، فإن أقل عدد من الأطفال ولدوا في شهري نوفمبر وفبراير. عندما يولد معظم الأطفال ، هل هناك أي أيام في الأسبوع يحبها الأطفال حديثو الولادة بشكل خاص عند الولادة؟
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
    </div>
    </Container>
  );
}

export default Questions;