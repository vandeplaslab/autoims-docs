# M: Contact information

## Brief description
Please provide your name and email address information. This information might be used to send an automated email when the tasks have completed.

## Parameters
| Field         | Type   | Description                |
|---------------|--------|----------------------------|
| User name     | string | Name of the user.          |
| Slack User ID | string | Slack user ID of the user. |
| User email    | string | Email of the user.         |

## More Information

This task is not really a task but rather a way for us to know who the data belongs to.

This information will be used to contact you once data processing has finished or if there were some issues.

You will be notified in the `Team Spraggins` workspace, in the `#autoims-progress` channel.

!!! success "How to find your Slack User ID"
    Please watch this video for step-by-step instructions.

    <figure markdown>
      <iframe width="600" height="400" src="https://www.youtube-nocookie.com/embed/u1IhnRV2TwI?si=AdnZuj0D2tfXSpDX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </figure>





## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | False   | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |
| Allowed in grid of parameters     | False   | A grid of parameters can be created for this task, automatically resulting in multiple instances of the task (**unused at the moment**)                                                                  |